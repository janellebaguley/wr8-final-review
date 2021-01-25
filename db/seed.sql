create table meme_user(user_id serial primary key, username varchar(20), email varchar(150), password varchar(250), profile_picture text);

create table post(
    post_id serial primary key, user_id int references meme_user(user_id), post_url text
);