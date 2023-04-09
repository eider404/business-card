create database Usuarios;

use Usuarios;
 
create table credenciales(
 
id int not null primary key,
 
nombre varchar(200) not null,

adress varchar(200) not null,

phone varchar(200) not null,

email varchar(200) not null,

website varchar(200) not null,

logo varchar(200) not null,

facebooklink varchar(200) not null,

twitterlink varchar(200) not null,

instagramlink varchar(200) not null,

linkedinlink varchar(200) not null,

youtubelink varchar(200) not null

);
