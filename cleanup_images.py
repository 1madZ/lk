import re
import os

file_path = "/Users/imadvithanage/Downloads/Imad's Website1/index.html"
backup_path = file_path + ".bak_cleanup"

# Create backup
with open(file_path, 'r') as f:
    content = f.read()

with open(backup_path, 'w') as f:
    f.write(content)

def clean_img_tag(match):
    full_tag = match.group(0)
    
    # Extract attributes
    src_match = re.search(r'src="([^"]+)"', full_tag)
    srcset_match = re.search(r'srcset="([^"]+)"', full_tag)
    alt_match = re.search(r'alt="([^"]*)"', full_tag)
    class_match = re.search(r'class="([^"]+)"', full_tag)
    style_match = re.search(r'style="([^"]+)"', full_tag)
    width_match = re.search(r'width="([^"]+)"', full_tag)
    height_match = re.search(r'height="([^"]+)"', full_tag)
    
    # Determine new src
    new_src = ""
    if src_match:
        new_src = src_match.group(1)
    elif srcset_match:
        # Take first url from srcset
        srcset_val = srcset_match.group(1)
        first_entry = srcset_val.split(',')[0].strip()
        new_src = first_entry.split(' ')[0]
    
    if not new_src:
        return full_tag # Don't touch if no src found
        
    # Standardise path
    if not new_src.startswith('./'):
        if new_src.startswith('images/'):
            new_src = './' + new_src
        elif new_src.startswith('/images/'):
            new_src = '.' + new_src
        # If it's just filename or other, assume ./images/ if it looks like an image? 
        # For now, only fix known patterns 'images/...'
    
    # Rebuild tag
    new_tag = '<img'
    
    if new_src:
        new_tag += f' src="{new_src}"'
    if alt_match:
        new_tag += f' alt="{alt_match.group(1)}"'
    if class_match:
        new_tag += f' class="{class_match.group(1)}"'
    if style_match:
        # Check if style has background image url that needs fixing? 
        # The user issue was mostly about img tags. inline styles we handled manually.
        # Let's keep style as is, but maybe remove 'color:transparent' if it was part of the next/image placeholder?
        # Next.js images often have color:transparent.
        style_val = style_match.group(1)
        # Remove color:transparent
        style_val = style_val.replace('color:transparent', '').replace(';;', ';').strip('; ')
        if style_val:
             new_tag += f' style="{style_val}"'
    if width_match:
        new_tag += f' width="{width_match.group(1)}"'
    if height_match:
        new_tag += f' height="{height_match.group(1)}"'
        
    # Add draggable="false" if it was there? regex didn't capture it.
    # Let's be safe and just keep necessary attributes for display.
    # User had draggable="false" on many.
    if 'draggable="false"' in full_tag:
        new_tag += ' draggable="false"'
        
    new_tag += '>'
    
    print(f"Fixed: {new_src}")
    return new_tag

# Regex to find img tags that HAVE srcset OR loading="lazy" matches
# We want to be careful not to match standard clean tags we just fixed.
# But looking for srcset is a good indicator of a "dirty" tag.
# Also looking for src="images/..." without ./
pattern = r'<img[^>]*?(?:srcset="[^"]*"|loading="lazy"|src="images/[^"]*")[^>]*?>'

new_content = re.sub(pattern, clean_img_tag, content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(new_content)

print("Cleanup complete.")
