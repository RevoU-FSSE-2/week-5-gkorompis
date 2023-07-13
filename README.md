[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6H2sAzcR)
# week-5-gkorompis
week-5-gkorompis created by GitHub Classroom

<img width="1434" alt="Screen Shot 2023-07-13 at 10 50 11" src="https://github.com/RevoU-FSSE-2/week-4-gkorompis/assets/52250424/37323e17-2270-49e6-ae60-23add1dba8a7">

## Application Overview
Official application for songwriter and music enthusiats, where users can share their work and explore other artist's work. The web app is hosted by netlify on [STRUMS.](https://strums.site). This application is designed to be fully responsive and supports multiple dimensions, including desktop and mobile phones. It is built using responsive design techniques and follows best practices to ensure an optimal user experience across various devices.

### Features

- Responsive layout that adapts to different screen sizes and orientations
- Optimized for desktop browsing
- Compatible with a wide range of mobile devices, including smartphones and tablets

### Compatibility

The application has been tested and verified to work seamlessly on the following platforms:

- Desktop browsers (Chrome, Firefox, Safari, etc.)
- Mobile devices (iOS, Android) - across different screen sizes and resolutions

Please note that while the application strives to provide a consistent experience across devices, some features or visual elements may vary slightly depending on the screen size and capabilities of the device being used.

## Code Documentation
Code documentation is managed by committing and pushing to this github repository.
```
#prepare project's codes
git clone https://github.com/RevoU-FSSE-2/week-4-gkorompis.git
cd week-5-gkorompis
git add .

#review changes
git status

#make commits
git commit -f 'commit message'
git remote set-url origin https://github.com/RevoU-FSSE-2/week-4-gkorompis.git

#push
git push origin main
```

## Version Control
Version control is managed by committing new changes inside new branch and then merging branch's commit by applying pull request via github web interface.
```
#creating new branch
git checkout -n <new branch name>

#switching to existing branch
git checkout -n <existing branch name>
```

## CI/CD Deployment
Continous deployment is achieved by importing existing project in github to netlify. 
1. Connect to Git provider
2. Pick a repository
3. Site configuration and deploy
<img width="1111" alt="Screen Shot 2023-07-13 at 10 27 05" src="https://github.com/RevoU-FSSE-2/week-4-gkorompis/assets/52250424/598c6f64-52dc-48be-aa92-43a935e5b432">
<br />
<br />
<br />

## DNS Management
Domain is provided by Niagahoster and managed through Cloudflare.
1. Login to Cloudflare, and then adding new site
<img width="718" alt="Screen Shot 2023-07-13 at 10 32 06" src="https://github.com/RevoU-FSSE-2/week-4-gkorompis/assets/52250424/c72ad79a-b64d-432c-9cca-04108b295772">
<br />
 <br />
2. Login to Niaghoster and then replacing registrar nameserver of the selected domain by cloudflare nameserver.
<img width="747" alt="Screen Shot 2023-07-13 at 10 44 09" src="https://github.com/RevoU-FSSE-2/week-4-gkorompis/assets/52250424/ea388005-d189-4977-951c-5b39874aeb18">
<br />
<br />
3. After Cloudflare succeeded connecting to the domain, managed DNS record by adding cname provided by Netlify into the record list.
<img width="1100" alt="Screen Shot 2023-07-13 at 10 37 02" src="https://github.com/RevoU-FSSE-2/week-4-gkorompis/assets/52250424/411d7265-dfd7-4a84-a6b6-fe89dfe2788d">
<br />
<br />
4. Finally, adding the domain to the Netlify.
<img width="1094" alt="Screen Shot 2023-07-13 at 10 48 33" src="https://github.com/RevoU-FSSE-2/week-4-gkorompis/assets/52250424/60284332-f82b-46ef-bd8a-190d0f9dcf8b">

