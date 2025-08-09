# Git Bash Command Guide with Examples

This guide covers essential Git Bash commands for file navigation, inspection, and management, along with detailed examples and explanations.

---

## 📍 1. `pwd` — Print Working Directory

**Description:** Displays the absolute path of the current directory.

**Examples:**

```bash
pwd
```
Output example:
```
/c/Users/Cristian/projects
```

```bash
cd /c/Windows && pwd
```
Shows the full path after changing to the Windows directory.

---

## 📂 2. `ls` — List Files

**Description:** Lists the contents of the current directory.

**Examples:**

```bash
ls
```
Lists files and directories in the current folder.

```bash
ls /c/Users
```
Lists files inside the `Users` directory.

---

## 🔍 3. `ls -a` — List All Files (including hidden)

**Description:** Shows all files, including hidden ones (those starting with a dot).

**Examples:**

```bash
ls -a
```
Might show `.git`, `.bashrc`, etc.

```bash
ls -a /c/Users/Cristian
```
Shows hidden files in Cristian's home folder.

---

## 📏 4. `ls -lha` — Detailed List with Human-readable Sizes

**Description:** Lists all files with details like permissions, owner, size, and modification date.

**Examples:**

```bash
ls -lha
```
Displays sizes in KB, MB for readability.

```bash
ls -lha /c/Windows
```
Detailed listing of the Windows directory.

---

## 🔄 5. `cd` — Change Directory

**Description:** Moves between directories.

**Examples:**

```bash
cd Documents
```
Moves into the `Documents` folder.

```bash
cd /c/Users
```
Moves to the Users directory using an **absolute path**.

---

## 🔹 6. `cd .` — Current Directory

**Description:** Refers to the current directory (useful in scripts).

**Example:**
```bash
cd .
```
Does nothing but confirms you’re in the same directory.

---

## ⬆ 7. `cd ..` — Parent Directory

**Description:** Moves one directory up.

**Examples:**

```bash
cd ..
```
Moves from `/c/Users/Cristian` to `/c/Users`.

```bash
cd ../../
```
Moves two levels up.

---

## 🗑 8. `rm` — Remove File

**Description:** Deletes a file.

**Examples:**

```bash
rm file.txt
```
Deletes `file.txt`.

```bash
rm notes.md
```
Deletes the `notes.md` file.

⚠️ **Caution:** This deletion is permanent.

---

## 🗂 9. `rm -r` — Remove Directory Recursively

**Description:** Deletes a folder and its contents.

**Examples:**

```bash
rm -r old_folder
```
Deletes `old_folder` and all files in it.

```bash
rm -r test_project
```
Removes `test_project` completely.

⚠️ Use carefully.

---

## 📜 10. `dir` — List Directory Contents (Windows-style)

**Description:** Shows directory listing similar to Command Prompt.

**Example:**
```bash
dir
```

---

## ✍ 11. `touch` — Create Empty File

**Description:** Creates a new file (or updates timestamp if it exists).

**Examples:**

```bash
touch hello.txt
```
Creates `hello.txt`.

```bash
touch notes.md tasks.md
```
Creates multiple files.

---

## 🧹 12. `clear` or `Ctrl+L` — Clear Terminal

**Description:** Clears the terminal screen.

**Examples:**

```bash
clear
```
or press `Ctrl + L`.

---

## 📍 13. Relative vs Absolute Paths

- **Absolute path:** Starts from the root (`/`).
  ```bash
  cd /c/Users/Cristian/Documents
  ```
- **Relative path:** Starts from your current location.
  ```bash
  cd Documents
  ```

---

## ⚙️ 14. Command Parameters

Parameters modify command behavior.
Example:
```bash
ls -lha
```
- `-l` = long format
- `-h` = human-readable
- `-a` = show hidden files

---

## ⚡ 15. Tab Completion

**Description:** Press `Tab` to auto-complete file or folder names.

Example:
```bash
cd Doc[TAB]
```
Becomes:
```bash
cd Documents
```
## ⚡ 15. Commit and push the changes to your Github Repository
git add .
git commit -m "choose a descriptive message"
git push

Happy Git Bashing! 🚀
