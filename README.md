[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6H2sAzcR)
# week-4-gkorompis
week-4-gkorompis created by GitHub Classroom

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
cd week-4-gkorompis
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
4. <img width="1111" alt="Screen Shot 2023-07-13 at 10 27 05" src="https://github.com/RevoU-FSSE-2/week-4-gkorompis/assets/52250424/598c6f64-52dc-48be-aa92-43a935e5b432">

## DNS Management
Domain is provided by Niagahoster and managed through Cloudflare.
1. Login to Cloudflare, and then adding new site
<img width="718" alt="Screen Shot 2023-07-13 at 10 32 06" src="https://github.com/RevoU-FSSE-2/week-4-gkorompis/assets/52250424/c72ad79a-b64d-432c-9cca-04108b295772">
2. Login to Niaghoster and then replacing registrar nameserver of the selected domain by cloudflare nameserver.
3. After Cloudflare succeeded connecting to the domain, managed DNS record by adding cname provided by Netlify into the record list.
4. Finally, adding the domain to the Netlify.

