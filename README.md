# next-laravel-test

`vim ~/.bash_profile` or `vim ~/.zshrc` に 以下を追記

`alias sail='bash vendor/bin/sail'`

`source ~/.bash_profile` or `source ~/.zshrc`

`git checkout master`

`sail up -d`


`sail up -d` がうまくいったら containerが6つくらいできます

`sail composer install` と `cp api/.env.example api/.env` と `cd client | npm run dev`  したら、

ブラウザで

- Laravel :  http://localhost:80

- Next.js : http://localhost:3000

- テスト用で作ったfetch投げるページ：http://localhost:3000/hello

を開いてみてください
