# 2021.01.08-codari-project
K-move Java Enterprise Developer Course Team project

Developed by:

 - Hwanik Yoo (as front/back-end dev)
 - Jinsun Kim (as front/back-end dev)
 - Myeonggi Shim (as front/back-end dev)

This project aims to provide: 

 - A community for those who wishes to share information about Korea's COVID-19 situation
 - Number of cases of death, tested positive 
 - Contact & location of designated COVID hospitals and heath care centers 
 - Fact Check page for correct misconception about COVID-19
 
Technologies used to develop this project comprises:

  - HTML(thymeleaf),CSS,Javascript
  - Jquery
  - JAVA
  - MariaDB
  - MySQL
  - Maven Apache Tomcat
  - Mybatis
  - Spring Boot

APIs from:
공공데이터포털: https://www.data.go.kr 
(COVID-19 info API, COVID-19 Medical Center API)


# main page
![main_page](https://user-images.githubusercontent.com/70088347/122657742-44d9db00-d1a1-11eb-97ec-27d89cd44f34.png)

# Daily Updated Korea COVID-19 Status Tracker
![logged_in](https://user-images.githubusercontent.com/70088347/122657775-7783d380-d1a1-11eb-9f22-f6dd9bf70171.png)

# Detailed COVID-19 Status By Provinces 
![corona_detail_info](https://user-images.githubusercontent.com/70088347/122657832-de08f180-d1a1-11eb-9a0d-e1896ff28c9d.png)
- Visible when clicked 'provincial status' button below daily tracker.

# COVID-19 Keyword Cloud from NAVER Portal
![keywords_uploaded](https://user-images.githubusercontent.com/70088347/122657802-aef28000-d1a1-11eb-9b66-413d9df3fb2a.png)

# Sign-up page
![sign_up_page](https://user-images.githubusercontent.com/70088347/122657996-502e0600-d1a3-11eb-8e59-ec1e4f83b6c2.png)
- Accessible either through sign-up menu in side bar or log-in page.
- ID input must comply with email format, user has to conduct duplicates check by clicking on 'check duplicates'.
- For nickname as well, user has to conduct duplicates check by clicking on 'check duplicates'.
- Password must be typed double time to check for user confirmation.

# Log-in page (id input must comply with email format)
![login](https://user-images.githubusercontent.com/70088347/122657852-04c72800-d1a2-11eb-9065-8f0bba7149f6.png)
![login_format_chk](https://user-images.githubusercontent.com/70088347/122657900-6a1b1900-d1a2-11eb-9e22-1e51834de595.png)
- Log-in success directs to main page.
 
# My Page
![my_page](https://user-images.githubusercontent.com/70088347/122658517-41e2e880-d1a9-11eb-8e10-0576f6baf19a.png)
- User can view: ID and Nickname
- Updatable, Self-deletable

# My Info update
![my_info_update](https://user-images.githubusercontent.com/70088347/122658531-650d9800-d1a9-11eb-87dc-a5bcd4a64f70.png)
- User can modify Id and Nickname

# User Info (For Admin)
![user_list](https://user-images.githubusercontent.com/70088347/123497010-23c42f00-d666-11eb-8a7a-8d8f85d6f8a2.png)
-Admin can access to whole user list (deport user button available)

# User Insert
![user_insert](https://user-images.githubusercontent.com/70088347/123497035-422a2a80-d666-11eb-84b7-c7886f0225fa.png)
- Admin can manually add user account for the web site (admin account or user account)

# User Modification
![user_modfication](https://user-images.githubusercontent.com/70088347/123497101-9c2af000-d666-11eb-803e-79c0da23b270.png)
- Admin can manually modify user's information (except for password && user code)

# Notice Board
![notice_list](https://user-images.githubusercontent.com/70088347/122658324-da2b9e00-d1a6-11eb-9bd7-7fa038dee85a.png)
- Page for System Related Anouncement.
# Notice Detail Page
![notice_detail](https://user-images.githubusercontent.com/70088347/122658344-0e06c380-d1a7-11eb-812d-5356e631f427.png)
- View of the Content of the Anouncement.
- Updatable, Deletable.

# Notice Detail Update Page
![notice_update](https://user-images.githubusercontent.com/70088347/122658357-3393cd00-d1a7-11eb-9e0c-9e67fcca6fde.png)
- Font-Size, Font-Color, Highlight-Color Modification, Photo, File upload, etc.. available by summernote add-on.

# Fact Check Board
![fact_check_page](https://user-images.githubusercontent.com/70088347/122658383-81a8d080-d1a7-11eb-8dc8-4f82b9ddaa22.png)
- Space for True Information to Correct User's Misconception of COVID-19.

# Fact Check Detail Page
![fact_check_detail](https://user-images.githubusercontent.com/70088347/122658405-ca608980-d1a7-11eb-9ca7-272ab7c27316.png)
- Provide True or False for the Subject Information.

# Fact Check Create Page
![fact_check_create](https://user-images.githubusercontent.com/70088347/122658417-f11ec000-d1a7-11eb-98e8-b1278b694395.png)
- Can Create Contents Using Summernote Editor, Files and Photos uploadable.

# Community Board
![community_board](https://user-images.githubusercontent.com/70088347/122658435-39d67900-d1a8-11eb-892c-6aa3fe2571d4.png)
- Space for Exchanging COVID-19 Related Information.

# Board Detail
![board_detail_reply](https://user-images.githubusercontent.com/70088347/123496982-fbd4cb80-d665-11eb-8ab5-ae4a2b7babd8.png)
- Content Updatable, Deletable (by admin or content owner), Commentable(deletable).

# Medical Center Page
![medical_center_select](https://user-images.githubusercontent.com/70088347/122658464-93d73e80-d1a8-11eb-9263-3d3d2f7a5ca9.png)
- User can Select either: COVID-19 Safe Hospital, COVID-19 Test Site, COVID-19 Specialized Hospital.

# COVID-19 Safe Hospital List
![covid_safe_hospital_list](https://user-images.githubusercontent.com/70088347/122658484-ddc02480-d1a8-11eb-9691-a7a49955d23d.png)
- List of Hospital Safe from COVID-19 Infection.
![csh_specified](https://user-images.githubusercontent.com/70088347/122658488-e7498c80-d1a8-11eb-9ec5-5e66c45b8cf9.png)
- User can Specify the Hospitals by Region Name

# COVID-19 Test Site List
![covid_test_sites](https://user-images.githubusercontent.com/70088347/122658500-0f38f000-d1a9-11eb-8ce9-a922ec069247.png)
![cts_specified](https://user-images.githubusercontent.com/70088347/122658503-106a1d00-d1a9-11eb-9c86-15b603c5e82e.png)

# COVID-19 Specialized Hospital List
![covid_specialized_hospital](https://user-images.githubusercontent.com/70088347/122658510-211a9300-d1a9-11eb-85d3-51475795ea06.png)

Latest Update: as of June 26th 2021
