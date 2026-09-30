# Repositori Praktikum Pemrograman Web 2026
**Informasi Mahasiswa:**
* **Nama:** [Nabil Muhammad Ramadhan]
* **NIM:** [2406072]
* **Kelas/Prodi:** Teknik Informatika B - ITG
* **Kode MK:** IFRWP5151
---
## Catatan Modul 1
- Instalasi & Verifikasi Tools (VS Code, Node.js, Laragon, Git).
- Uji coba Laragon MySQL berjalan pada Port 3306.
- Konfigurasi identitas Git global.
### Spesifikasi Perangkat
- Microsoft Windows [Version 10.0.26200.9457]
(c) Microsoft Corporation. All rights reserved.

D:\Nabil Muh R-2406072\Prak Pemprog>node -v
v24.21.0

D:\Nabil Muh R-2406072\Prak Pemprog>npm -v
11.19.0

D:\Nabil Muh R-2406072\Prak Pemprog>git --version
git version 2.56.0.windows.1

D:\Nabil Muh R-2406072\Prak Pemprog>git config --global user.name "Nabil_Muhammad_Ramadhan"

D:\Nabil Muh R-2406072\Prak Pemprog>git config --global user.email "2406072@itg.ac.id"      

D:\Nabil Muh R-2406072\Prak Pemprog>git config --global user.name "nabilmuhammadramadhan"  

D:\Nabil Muh R-2406072\Prak Pemprog>git init
Initialized empty Git repository in D:/Nabil Muh R-2406072/Prak Pemprog/.git/

D:\Nabil Muh R-2406072\Prak Pemprog>git add .

D:\Nabil Muh R-2406072\Prak Pemprog>git commit -m "setup env dan inisialisasi repositori modul 1"
[master (root-commit) 0a1fed3] setup env dan inisialisasi repositori modul 1
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md

D:\Nabil Muh R-2406072\Prak Pemprog>git branch -M main

D:\Nabil Muh R-2406072\Prak Pemprog> https://github.com/nabilmuhammadramadhan/praktikum-web2026.git
'https:' is not recognized as an internal or external command,
operable program or batch file.

D:\Nabil Muh R-2406072\Prak Pemprog>git remote add origin https://github.com/nabilmuhammadramadhan/praktikum-web2026.git

D:\Nabil Muh R-2406072\Prak Pemprog>git push -u origin main
info: please complete authentication in your browser...
remote: Repository not found.
fatal: repository 'https://github.com/nabilmuhammadramadhan/praktikum-web2026.git/' not found

D:\Nabil Muh R-2406072\Prak Pemprog>
D:\Nabil Muh R-2406072\Prak Pemprog>git remote add origin https://github.com/nabilmuhammadramadhan/praktikum-web-2026.git
error: remote origin already exists.

D:\Nabil Muh R-2406072\Prak Pemprog>git remote add origin https://github.com/nabilmuhammadramadhan/praktikum-web-2026.git
error: remote origin already exists.

D:\Nabil Muh R-2406072\Prak Pemprog>git push -u origin main
info: please complete authentication in your browser...
remote: Repository not found.
fatal: repository 'https://github.com/nabilmuhammadramadhan/praktikum-web2026.git/' not found

D:\Nabil Muh R-2406072\Prak Pemprog>git remote set-url origin https://github.com/nabilmuhammadramadhan/praktikum-web-2026.git 

D:\Nabil Muh R-2406072\Prak Pemprog>git push -u origin main
info: please complete authentication in your browser...
remote: Repository not found.
fatal: repository 'https://github.com/nabilmuhammadramadhan/praktikum-web-2026.git/' not found

D:\Nabil Muh R-2406072\Prak Pemprog>git remote add origin https://github.com/nabilmuhammadramadhan/-praktikum-web-2026.git
error: remote origin already exists.

D:\Nabil Muh R-2406072\Prak Pemprog>git remote set-url origin https://github.com/nabilmuhammadramadhan/-praktikum-web-2026.git

D:\Nabil Muh R-2406072\Prak Pemprog>git push -u origin main
info: please complete authentication in your browser...
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 238 bytes | 238.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/nabilmuhammadramadhan/-praktikum-web-2026.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

D:\Nabil Muh R-2406072\Prak Pemprog>git add . 

D:\Nabil Muh R-2406072\Prak Pemprog>git commit -m "setup env dan inisialisasi repositori modul 1"
[main c72a5e6] setup env dan inisialisasi repositori modul 1
 1 file changed, 11 insertions(+)

D:\Nabil Muh R-2406072\Prak Pemprog>git push -u origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 20 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 543 bytes | 543.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/nabilmuhammadramadhan/-praktikum-web-2026.git
   0a1fed3..c72a5e6  main -> main
branch 'main' set up to track 'origin/main'.

D:\Nabil Muh R-2406072\Prak Pemprog>  