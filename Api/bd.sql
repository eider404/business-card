create database Usuarios;

use Usuarios;
 
create table credenciales(
 
id int not null primary key,
 
nombre varchar(500) not null,

adress varchar(500) not null,

phone int not null,

email varchar(500) not null,

website varchar(500) not null,

logo varchar(500) not null,

facebooklink varchar(500) not null,

twitterlink varchar(500) not null,

instagramlink varchar(500) not null,

linkedinlink varchar(500) not null,

youtubelink varchar(500) not null

);

Drop database Usuarios;