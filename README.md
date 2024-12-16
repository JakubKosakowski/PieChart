<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/JakubKosakowski/PHP-Recruitment-Task">
    <img src="https://laravel.com/img/logomark.min.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">PieChart Recruitment Task</h3>

  <p align="center">
    PieChart application written in Laravel.
    <br />
    <a href="https://github.com/JakubKosakowski/PHP-Recruitment-Task"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>


### Built With

* [![Laravel][Laravel.com]][Laravel-url]
* [![ReactJS][ReactJS.com]][ReactJS-url]
* [![Typescript][Typescript.com]][Typescript-url]
* [![MySQL][MySQL.com]][MySQL-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Required technologies

Before run this Laravel project, make sure that your local machine has 
<a href="https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe/download">XAMPP</a>,
<a href="https://getcomposer.org/download/">Composer</a>
and 
<a href="https://nodejs.org/en/download/package-manager">Node and NPM</a> installed.

Before you go into below section, run XAMPP Control Panel and start MySQL and Apache.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JakubKosakowski/PHP-Recruitment-Task.git
   cd PHP-Recruitment-Task
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Install composer package
   ```sh
   composer install
   ```
5. Set up .env file
   ```sh
   cp .env.example .env
   ```
6. Generate the App key
   ```sh
   php artisan key:generate
   ```
7. Set up the Database
   Replace .env DB_* variables with below code:
   ```sh
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=blog
   DB_USERNAME=root
   DB_PASSWORD=
   ```
8. Run the migrations with seeder
   ```sh
   php artisan migrate
   php artisan db:seed
   ```
9. Run npm
   ```sh
   npm run dev
   or
   npm run prod
   ```
10. Run Laraver serve
       ```sh
       php artisan serve
       ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Jakub Kosakowski  - Jakub.Kosakowski@protonmail.com

Project Link: [https://github.com/JakubKosakowski/PieChart](https://github.com/JakubKosakowski/PieChart)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jakub-kosakowski/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[ReactJS.com]: https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge
[ReactJS-url]: https://react.dev
[Typescript.com]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge
[Typescript-url]: https://www.typescriptlang.org
[MySQL.com]: https://img.shields.io/badge/MySQL-0074A3?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com
