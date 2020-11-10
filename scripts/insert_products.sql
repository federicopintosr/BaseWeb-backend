
INSERT INTO products (codigo,cod_proveedor,cantidad,nombre,marca,descripcion_corta,descripcion_larga,categoria,genero,image,talle,color,precio,peso,estado,"createdAt","updatedAt") VALUES 
('1','a1',5,'Remera rayada','Adidas','Remera rayada Adidas de moda','Esta es una nueva remera con rayas delicadas temporada verano 2021',1,1,1,2,3,1250.0,0.0,'V','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
,('2','a1',5,'Remera rayada','Adidas','Remera rayada Adidas de moda','Esta es una nueva remera con rayas delicadas temporada verano 2021',1,1,1,2,5,1250.0,0.0,'V','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')


insert into colors (nombre,"createdAt","updatedAt") values ('Rojo','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into colors (nombre,"createdAt","updatedAt") values ('Blanco','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into colors (nombre,"createdAt","updatedAt") values ('Negro','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into colors (nombre,"createdAt","updatedAt") values ('Rosa','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into colors (nombre,"createdAt","updatedAt") values ('Azul','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')

insert into images (cod_producto ,imagen,"createdAt","updatedAt") values ('1','remera.jpg','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')

insert into sizes (nombre,nombre_corto,"createdAt","updatedAt") values('Small','S','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into sizes (nombre,nombre_corto,"createdAt","updatedAt") values('Medium','M','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into sizes (nombre,nombre_corto,"createdAt","updatedAt") values('Large','L','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into sizes (nombre,nombre_corto,"createdAt","updatedAt") values('X-Large','XL','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into sizes (nombre,nombre_corto,"createdAt","updatedAt") values('XX-Large','XXL','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')

insert into genders (nombre,nombre_corto,"createdAt","updatedAt") values('Hombre','H','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')
insert into genders (nombre,nombre_corto,"createdAt","updatedAt") values('Mujer','M','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')

insert into categories (cod_producto ,nombre,descripcion,"createdAt","updatedAt") values ('1','Sport','Sport','2020-09-26 18:51:43.125','2020-09-26 18:51:43.125')