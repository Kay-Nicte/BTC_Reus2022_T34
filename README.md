<h1>Angular Basics</h1>
Lo primero que hay que hacer, es crear un nuevo proyecto de Angular tal y como hice en el proyecto anterior (BTC_Reus2022_T33) y abrirlo desde Visual Studio Code. En este caso, el proyecto se llamará <i>proyecto001</i>.
Entonces, accederé a <i>proyecto001>src>app.component.html</i>, que tendrá este aspecto de serie:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171813102-5593185f-7c6f-4918-bff8-83d8df1f3993.png">
Procedo a modificarlo, de forma que el contenido sea el siguiente:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171813223-30f1be95-6418-4987-8f53-e0d188bec62d.png">
Tal y como se muestra en la captura, el <i>{{name}}</i> aparece subrayado en rojo, indicando que da un error. Esto se debe a que dicha variable no está contemplada en <i>app.components.ts</i>. Habrá que añadirla:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171813302-c75ca784-9d73-4816-aad5-2b2f27bee8ca.png">
Ahora ya estoy lista para volver a <i>app.components.html</i> y comprobar que efectivamente el error ha desaparecido:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171813385-6cc9bbe1-159e-472f-82bb-fb33652dba43.png">
Una vez hecho esto, ya se puede acceder a la visualización del proyecto, desde <i>localhost:4200</i>:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171813483-b8720166-19c8-4b0e-923a-491dbfb8d631.png">
