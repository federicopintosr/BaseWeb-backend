CREATE TABLE slides (
	id serial NOT NULL,
	position int null,
	name varchar(255) NULL,
	description varchar(255) NULL,
	image varchar(255) null,
	status char(1) null,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT slides_pkey PRIMARY KEY (id)
);

CREATE TABLE arrivals (
	id serial NOT NULL,
	position int null,
	name varchar(255) NULL,
	description varchar(255) NULL,
	product_id int null,
	price money null,
	image varchar(255) null,
	status char(1) null,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT new_arrivals_pkey PRIMARY KEY (id)
);