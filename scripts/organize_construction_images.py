#!/usr/bin/env python3
"""
Script to organize construction product images into public folder by product group.
Reads from the CSV file and copies matching images from downloaded_images to public/construction/{group}/
"""

import csv
import os
import shutil
import re

# Configuration
CSV_FILE = "/Users/sagardabas/Downloads/HaiTradingDmcc/products_export - Products.csv"
DOWNLOADED_IMAGES_DIR = "/Users/sagardabas/Downloads/HaiTradingDmcc/downloaded_images"
PUBLIC_DIR = "/Users/sagardabas/Downloads/HaiTradingDmcc/public/construction"

def sanitize_filename(name):
    """Convert item name to the filename format used in downloaded_images."""
    # Remove special characters except alphanumeric, spaces, and hyphens
    safe_name = re.sub(r'[^a-zA-Z0-9\s\-]', '', name)
    # Replace spaces with underscores
    safe_name = re.sub(r'\s+', '_', safe_name.strip())
    # Limit length
    return safe_name[:80]

def sanitize_folder_name(group):
    """Convert product group to a valid folder name."""
    # Replace spaces with hyphens, lowercase
    return group.lower().replace(' ', '-').replace('&', 'and')

def find_matching_image(item_name, images_dir):
    """Find the image file that matches the item name."""
    safe_name = sanitize_filename(item_name)

    # Create normalized versions for matching
    # Remove common variations and normalize
    def normalize(s):
        s = s.lower()
        s = re.sub(r'[_\-\s]+', '', s)  # Remove all separators
        s = re.sub(r'4ftx8ft|4x8ft|4ftx8|122x244cm', '', s)  # Remove size variants
        s = re.sub(r'generic|premium', '', s)  # Remove common suffixes
        return s

    normalized_search = normalize(safe_name)

    # List all files in the images directory
    all_images = [f for f in os.listdir(images_dir) if '_main.' in f]

    # First try: exact match
    for filename in all_images:
        name_part = filename.rsplit('_main.', 1)[0]
        if safe_name.lower() == name_part.lower():
            return filename

    # Second try: normalized match
    for filename in all_images:
        name_part = filename.rsplit('_main.', 1)[0]
        normalized_file = normalize(name_part)

        if normalized_search == normalized_file:
            return filename

    # Third try: key parts matching (for plywood, mdf, etc.)
    # Extract key identifiers from the search term
    search_parts = []
    # Extract size (6mm, 9mm, 12mm, etc.)
    size_match = re.search(r'(\d+)mm', item_name, re.IGNORECASE)
    if size_match:
        search_parts.append(size_match.group(1) + 'mm')

    # Extract type keywords
    for keyword in ['plywood', 'mdf', 'marine', 'commercial', 'plain', 'fr', 'bendply']:
        if keyword.lower() in item_name.lower():
            search_parts.append(keyword.lower())

    # Extract origin
    for origin in ['indonesia', 'india', 'china', 'thailand']:
        if origin.lower() in item_name.lower():
            search_parts.append(origin.lower())

    # Extract brand
    for brand in ['jr', 'kingdo', 'plex', 'ply']:
        if brand.lower() in item_name.lower():
            search_parts.append(brand.lower())

    if search_parts:
        for filename in all_images:
            name_lower = filename.lower()
            matches = sum(1 for part in search_parts if part in name_lower)
            # If most key parts match, consider it a match
            if matches >= len(search_parts) - 1 and matches >= 2:
                return filename

    # Fourth try: partial match
    for filename in all_images:
        name_part = filename.rsplit('_main.', 1)[0]
        if safe_name.lower() in name_part.lower() or name_part.lower() in safe_name.lower():
            return filename

    return None

def main():
    print(f"Reading CSV from: {CSV_FILE}")
    print(f"Images directory: {DOWNLOADED_IMAGES_DIR}")
    print(f"Output directory: {PUBLIC_DIR}")
    print("-" * 60)

    # Create public/construction directory if it doesn't exist
    os.makedirs(PUBLIC_DIR, exist_ok=True)

    # Read CSV and organize by product group
    products_by_group = {}

    with open(CSV_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            group = row.get('Product Group', '').strip()
            item_name = row.get('Web Item Name', '').strip()

            if group and item_name:
                if group not in products_by_group:
                    products_by_group[group] = []
                products_by_group[group].append(item_name)

    print(f"\nFound {len(products_by_group)} product groups:")
    for group, items in products_by_group.items():
        print(f"  - {group}: {len(items)} products")

    print("\n" + "=" * 60)
    print("Organizing images...")
    print("=" * 60)

    total_copied = 0
    not_found = []

    for group, items in products_by_group.items():
        folder_name = sanitize_folder_name(group)
        group_dir = os.path.join(PUBLIC_DIR, folder_name)
        os.makedirs(group_dir, exist_ok=True)

        print(f"\n📁 {group} -> public/construction/{folder_name}/")

        for item_name in items:
            matching_image = find_matching_image(item_name, DOWNLOADED_IMAGES_DIR)

            if matching_image:
                src_path = os.path.join(DOWNLOADED_IMAGES_DIR, matching_image)

                # Create a clean filename for the destination
                safe_name = sanitize_filename(item_name)
                ext = os.path.splitext(matching_image)[1]
                dst_filename = f"{safe_name}{ext}"
                dst_path = os.path.join(group_dir, dst_filename)

                shutil.copy2(src_path, dst_path)
                print(f"  ✓ {item_name[:50]}...")
                total_copied += 1
            else:
                print(f"  ✗ NOT FOUND: {item_name[:50]}...")
                not_found.append((group, item_name))

    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Total images copied: {total_copied}")
    print(f"Images not found: {len(not_found)}")

    if not_found:
        print("\nProducts without matching images:")
        for group, item in not_found:
            print(f"  - [{group}] {item}")

    print(f"\nImages organized in: {PUBLIC_DIR}")

    # List created folders
    print("\nCreated folders:")
    for folder in sorted(os.listdir(PUBLIC_DIR)):
        folder_path = os.path.join(PUBLIC_DIR, folder)
        if os.path.isdir(folder_path):
            count = len([f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))])
            print(f"  📁 {folder}/ ({count} images)")

if __name__ == "__main__":
    main()
