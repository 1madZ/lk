import os

js_dir = "/Users/imadvithanage/Downloads/Imad's Website/js"

print("Patching component definitions...")

for filename in os.listdir(js_dir):
    if not filename.endswith(".js"): continue
    
    filepath = os.path.join(js_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    
    # 1. Patch Album Component (width:80,height:80 and width:216,height:216)
    # We target the specific calling pattern in minified code.
    # Pattern: width:80,height:80
    if "width:80,height:80" in new_content:
        # Avoid double inject
        if "width:80,height:80,unoptimized:!0" not in new_content:
            print(f"Patching Album (small) in {filename}")
            new_content = new_content.replace("width:80,height:80", "width:80,height:80,unoptimized:!0")
            
    if "width:216,height:216" in new_content:
        if "width:216,height:216,unoptimized:!0" not in new_content:
            print(f"Patching Album (large) in {filename}")
            new_content = new_content.replace("width:216,height:216", "width:216,height:216,unoptimized:!0")

    # 2. Patch Book Component
    # Pattern: width:i,height:o,priority:!0
    # or just priority:!0 inside the Book function? 
    # The snippet showed: src:t,alt:n,width:i,height:o,priority:!0
    if "width:i,height:o,priority:!0" in new_content:
         if "width:i,height:o,priority:!0,unoptimized:!0" not in new_content:
            print(f"Patching Book in {filename}")
            # Be precise
            new_content = new_content.replace("width:i,height:o,priority:!0", "width:i,height:o,priority:!0,unoptimized:!0")

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
