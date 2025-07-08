package classes;
public class CircularDoubleNodeList {
    private Node head;
    private Node tail;

    public CircularDoubleNodeList() {
        this.head = null;
        this.tail = null;
    }

    public boolean esListaVacia(){
        if (head == null){ //Si la cabeza está null, la lista está vacía
            return true;
        } else { //Si no, contien al menos un nodo
            return false;
        }
    }

    public void addHead(Procedure value){
        Node newNode = new Node(value); //Crear un nuevo nodo con el valor como parámetro
        if (esListaVacia()){
            head = newNode; //Si la lista está vacía
            tail = newNode; //El nuevo nodo es cabeza y cola
            head.setNext(newNode); //Se apunta a si mismo (circularidad)
            head.setPrev(newNode);
        } else { //Si la lista no está vacía:
            newNode.setNext(head); //El nuevo nodo apunta a la antigua cabeza
            head.setPrev(newNode); //La antigua cabeza apunta al nuevo nodo (doble enlace)
            head = newNode; //El nuevo nodo ahora es cabeza
            tail.setNext(newNode); //La cola apunta a la nueva cabeza (circularidad)
            head.setPrev(tail); //La nueva cabeza apunta a la cola
        }
    }

    public void addTail(Procedure value){
        Node newNode = new Node(value); //Crear un nuevo nodo con el valor como parámetro
        if (esListaVacia()){ //Si la lista esta vacía, lo añade a la cabeza
            addHead(value);
        } else { //Si no está vacía
            newNode.setPrev(tail); //El nuevo nodo apunta a la antigua cola
            tail.setNext(newNode); //La antigua cola apunta al nuevo nodo
            tail = newNode; //El nuevo nodo ahora es la cola
            tail.setNext(head); //La nueva cola apunta a la cabeza (circularidad)
            head.setPrev(tail); //La nueva cabeza apunta a la cola
        }
    }

    public void showHead(){
        Node ptr = head; //Puntero auxiliar que comienza en la cabeza
        //Mientras existan más nodos a procesar
        while(ptr.getNext() != head){
            //Procesamiento de la información del nodo actual: ptr.getValue()
            System.out.print(ptr.getValue() + " --> "); //Imprime el valor actual
            ptr = ptr.getNext(); //Avanza al siguiente nodo
        }
        //Imprime el último de la cola y su enlace circular a la cabeza
        System.out.print(ptr.getValue() + " --> ");
        System.out.println(ptr.getNext().getValue() + "...");
    }

    public void showTail(){
        Node ptr = tail; //Puntero auxiliar que comienza en la cola

        while(ptr.getPrev() != tail){ //Mientras no se complete un ciclo
            System.out.print(ptr.getValue() + " <-- "); //Imprime el valor actual
            ptr = ptr.getPrev(); //Retrocede al nodo anterior
        }
        //Imprime el primer nodo (cabeza) y su enlace circular a la cola
        System.out.print(ptr.getValue() + " <-- ");
        System.out.println(ptr.getPrev().getValue());
    }

    public void remove(Procedure value){
        if (esListaVacia()){ //Lista vacía; nada a eliminar
            System.out.println("Lista vacia");
        } else {
            //Caso 1: Lista con un solo nodo
            if (head == tail && head.getValue() != value){
                head = null;
                tail = null;
                return;
            }
            //Caso 2: Eliminar la cabeza (múltiples nodos)
            if (head != tail && head.getValue() == value){
                head = head.getNext();
                head.setPrev(tail);
                tail.setNext(head);
                return;
            }
            //Caso 3: Buscar el nodo a eliminar en medio o cola
            Node ptr = head;
            do {
                ptr = ptr.getNext(); //Avanza al siguiente nodo
            }
            while (ptr != head && ptr.getValue() != value); //Hasta encontrarlo o dar la vuelta
            if (ptr != head){
                Node temp = ptr.getPrev();
                temp.setNext(ptr.getNext()); //El nodo anterior salta al siguiente
                ptr.getNext().setPrev(temp); //El siguiente apunta al anterior
            } else {
                //Caso 4: El elemento a eliminar no está en la lista
                System.out.println("No se encontro el elemento a eliminar.");
            }
        }
    }
}
