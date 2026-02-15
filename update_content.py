import os

# Ordered replacements to ensure specific matches are handled before general ones
replacements = [
    # Profile
    ("Anuja Imad"),
    ("Developer ∘ Designer ∘ Founder"),
    
    # Social
    ("https://x.com/anujaimad"),
    ("https://www.linkedin.com/in/anujaimad/"),
    ("https://github.com/anujaimad"),
    ("mailto:1mad@mail.com"),
    
    # Experience
    ("BSc in MIS (special)"),
    ("NSBM Green University"),
    
    ("HD in Cyber Security & Ethical Hacking"), 
    ("SICT Campus"),
    ("2023 - 2024"),
    
    ("HD in ICT"),
    ("SLTCA Vocational Training Institute"),
    ("2023 – 2024"),
    
    ("CC in AI/ML Engineer"),
    ("SLIIT"),
    ("2023"),
    
    ("CC in Python"),
    ("University of Moratuwa"),
    ("2023"),
    
    # Projects
    ("Projects"),
    
    ("AAYU"),
    ("Childhood Cancer Application"),
    ("2026"),
    
    ("Downie"),
    ("Download Manager Application"),
    ("2025"),
    
    ("MLEARN"),
    ("Advanced AI ChatBot"),
    ("2024"),
    
    ("School of Arts"),
    ("Student"),
    ("2023 - 2024"),
    
    # Signatures / Short names - LAST
    ("Anuja")
]

files = ["index.html", "js/page-805ddb5a7603d559.js"]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original_content = content
    
    for old, new in replacements:
        if old in content:
            print(f"Replacing '{old}' with '{new}' in {file_path}")
            content = content.replace(old, new)
            
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")
    else:
        print(f"No changes in {file_path}")
