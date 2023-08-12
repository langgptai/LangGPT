import json

def parse_markdown(markdown_content):
    result = {}
    current_section = None
    current_subsection = None
    current_list = None

    for line in markdown_content.strip().split('\n'):
        line = line.strip()

        # Recognizing the top-level section (e.g., "Role", "expert", "master")
        if line.startswith("# "):
            top_level_name = line[1:].split(":")[0].strip()
            result[top_level_name] = {"Name": line.split(":")[1].strip() if ":" in line else None}
            current_section = None
            current_subsection = None

        # Recognizing the second-level sections (e.g., "Profile", "Rules")
        elif line.startswith("## "):
            current_section = line[2:].strip()
            current_subsection = None
            result[top_level_name][current_section] = {} if current_section == "Profile" else []

        # Recognizing the third-level sections (e.g., "Skill")
        elif line.startswith("### "):
            current_subsection = line[3:].strip()
            result[top_level_name][current_section][current_subsection] = []

        # Recognizing list items in the "Profile" section
        elif line.startswith("-") and current_section == "Profile":
            key, value = line[1:].split(":", 1)
            result[top_level_name][current_section][key.strip()] = value.strip()

        # Recognizing numbered list items in other sections
        elif line.startswith("1.") or line.startswith("2.") or line.startswith("3."):
            if current_subsection:
                result[top_level_name][current_section][current_subsection].append(line[2:].strip())
            else:
                result[top_level_name][current_section].append(line[2:].strip())

        # Recognizing the "Initialization" section
        elif current_section=="Initialization":
            result[top_level_name][current_section] = line

    return result

# Example conversion to JSON
if __name__ == '__main__':
    md_file = "templates/baseRole.md"
    with open(md_file, 'r', encoding='utf-8') as f:
        markdown_content = f.read()

    json_result = json.dumps(parse_markdown(markdown_content), indent=4)
    print(json_result)
