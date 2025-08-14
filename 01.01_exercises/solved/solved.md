Solved exercises
1. Display the current directory using 'pwd'.
>bash
pwd /c/Users/crist/shrek-swamp/exercises/solved
2. Create a directory named "git_project" and navigate to it
>bash mkdir git_project

>bash cd exercises/git_project
3. Inside, create 2 subdirectories 'src' and 'docs'.
>bash  mkdir src docs

>bash  ls

docs/  src/

4. Inside src create 2 empty files: 'main.py' and 'utils.py'
>bash cd src

>bash touch main.py utils.py

>bash ls 

main.py utils.py

5. List all files and directories including hidden ones
>bash cd ../../../

goes back to initial outer project file
>bash ls-la

shows all files and subfiles

6. Go one level back and create a README file
>bash cd /c/Users/crist/shrek-swamp/exercises/git_project/src

>bash cd ..

>bash touch README.md

7. Remove the 'docs' folder using rmdir(make sure it is empty)
>bash rmdir docs

no need for rm -r since the docs folder is empty

8. Create a nested folder structure 'demo/test1/test2' in one command
>bash mkdir -p demo/test1/test2

make sure to add a file here because git does not list empty files so the following needs to be added:
>bash touch /c/Users/crist/shrek-swamp/exercises/git_project/demo/test1/test2/test.py

9. Navigate to test2 using only relative paths
>bash cd demo/test1/test2

10. Clear the terminal using clear or CTRL+L
>bash ctrl+l

11. Commit and push changes
>bash cd ../../../../

>bash add .

>bash commit -m "Solved exercises"

>bash git push