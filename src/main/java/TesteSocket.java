
import java.io.IOException;
import java.io.InputStream;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

public class TesteSocket {
    public static void main(String[] args) {
        //  try-with-resources → fecha o recurso.
        // catch → trata a exceção.
        // standardCharsets.UTF_8 transforma o texto em bytes.
        //getBytes(...) é o metodo que efetivamente faz essa conversão.
       // write(dados) envia esses bytes para a API.

        try( Socket  socket = new Socket("localhost",8080)){
            String requisicao = "GET /materiais/M-100/estoque HTTP/1.1\r\n"
                    + "Host: localhost\r\n"
                    + "Connection: close\r\n"
            + "\r\n";


            byte[] dados = requisicao.getBytes(StandardCharsets.UTF_8);

            //getOutputStream obtém o fluxo de saída
            socket.getOutputStream().write(dados);
            //obtém o fluxo da entrada
            InputStream entrada = socket.getInputStream();
            byte[] buffer = new byte[1024];

            int quantidade;

            while ((quantidade = entrada.read(buffer)) != -1) {
                System.out.print(new String(buffer, 0, quantidade, StandardCharsets.UTF_8));
            }
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}