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
<br>
Una vez hecho esto, procedo a implementar nuevos datos en el modelo de datos:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171817985-2e95aab5-9f5e-48ba-9860-61f55f505f08.png">
<br>
Y aquí mismo, debajo, añado varios métodos:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171818090-8dfacba4-7902-4c60-8035-e73aec2c8b80.png">
<br>
Y ahora ha llegado el momento de organizar la forma en que se van a mostrar los datos. Para ello, voy a volver a app.component.html:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171819103-06616e9b-b213-443e-8b79-5730cd5ce471.png">
<br>
Así es como se verá por pantalla:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171819584-b2e8b740-e59f-43ac-af5f-a25361473a69.png">
<br>
Ahora voy a modificar de nuevo el archivo app.component.html:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171822350-ee5c3e1c-1b13-4e59-afab-9ad93e6d509b.png">
<br>
Y esto es lo que se verá por pantalla:
<br>
<img src="https://user-images.githubusercontent.com/71872946/171822563-f2538e7f-9873-4136-ad9b-829b6cf2973d.png">
<br><br>
<h3>Captura de eventos</h3>
Pasamos a la captura de eventos:<br> 
Vuelvo a modificar <i>app.components.ts</i>:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171824724-3c62d987-7c80-44ed-8d58-2c949285f328.png">
<br>
Y de nuevo el <i>app.components.html</i>:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171825563-bb91938a-1372-4586-a5ed-b6174cf392f0.png">
<br>
Quedará una cosa así, en la que el botón de sumar va sumando de uno en uno, y el de restar va sumando de uno en uno:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171826336-0e4b5301-4f0d-4499-a136-e18aba23603e.png">
<br>
<h3>Directiva ngModel</h3>
Para utilizarla, es necesario importar primero la clase <i>'FormsModule'</i> en <i>'app.module.ts'</i> y especificarla en la propiedad <i>'imports'</i>:
<br>
<img src="https://user-images.githubusercontent.com/71872946/171828948-e7171207-ecd4-4f15-993e-c8880b37be1d.png">
<br>
Y en el html:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171830220-d5930605-e2f8-4e49-93c3-8f1d78b1bbaa.png">
<br>
Por último, la pantalla se verá de forma que lo que yo escriba en el input será lo que se muestre justo debajo. Algo así:
<br><br>
<img src="https://user-images.githubusercontent.com/71872946/171830994-9fd11f5e-88e7-4c8d-be6a-60ea1255a213.png">
<br>
Y finish :)

