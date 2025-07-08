package classes;
public class Queue {
    private static final int MAX_SIZE = 50;
    private  Procedure[] data;
    private int ini;
    private int fin;
    private int cantidad;

    public Queue(){
        data = new Procedure[MAX_SIZE];
        ini =  0;
        fin = -1;
        cantidad = 0;
    }

    public boolean isEmpty(){
        return cantidad == 0;
    }

    public boolean isFull(){
        return cantidad == MAX_SIZE;
    }

    public void encolar(Procedure item){
            if (isFull()){
                System.out.println("Cola llena.");
                return;
            }
            fin = (fin + 1) % MAX_SIZE;
            data[fin] = item;
            cantidad++;
    }

    public Procedure desencolar() {
        if (isEmpty()) {
            return null;
        }
        Procedure p = data[ini];
        ini = (ini + 1) % MAX_SIZE;
        cantidad--;
        return p;
    }

     public String printCola(){
        if (isEmpty()){
            return "";
        }
        // TAERA PARA COLA
        String a = "";
        for (int i=0;i<cantidad;i++){
            int ind = (ini + i)%MAX_SIZE;
            a = a + "EXPEDIENTE N°"+data[ind].getNumeroexp() + " | PRIORIDAD: "+data[ind].getPrioridad()+" | FECHA/HORA: "+data[ind].getFecha_hora_inicio();
        }
        System.out.println("");
        return a;
     }

     public void clear() {
    	    ini = 0;
    	    fin = -1;
    	    cantidad = 0;
    	    data = new Procedure[MAX_SIZE]; // Limpia las referencias de los objetos
    	}

     public int size() {
         return cantidad;
     }
}
