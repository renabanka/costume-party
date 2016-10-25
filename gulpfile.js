var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var db = require('./models/db');

//section to create SQL tables!
var SQL_TABLE_CREATE_PARTIES = 'create table parties' +
    '(id int not null auto_increment,' +
    'name varchar(5) not null,' +
    'host_name varchar(20),' +
    'location varchar(255) not null,' +
    'primary key (id)' +
    ');';

var SQL_TABLE_DROP_PARTIES = 'drop table parties';
var SQL_TABLE_SELECT_ALL_PARTIES = 'select * from parties';


gulp.task('db_create_tables', function() {
   console.log('creating database tables...');
    var tag = 'SQL';

    function createTableCallback(response) {
        console.log(tag + ' Table creation completed.');
        console.log(response);
    }

    db.raw(SQL_TABLE_CREATE_PARTIES).then(createTableCallback);
});

gulp.task('db_drop_tables', function() {
  console.log('Dropping database tables...');

    function dropTableCallback(response) {
        console.log(response);
    }
    db.raw(SQL_TABLE_DROP_PARTIES).then(dropTableCallback);
});

gulp.task('db_select_all_parties', function() {
    console.log('Selecting database tables..');

    function selectAllParties(response) {
        console.log(response);
    }
    db.raw(SQL_TABLE_SELECT_ALL_PARTIES).then(selectAllParties);
});



//watch for changes!

//nodemon it up!
gulp.task('Nodemon', restartServer);
    function restartServer() {
        nodemon({
           script: './bin/www',
            ext: 'js hbs scss sql'

        });
    };

    gulp.task('default', ['Nodemon']);