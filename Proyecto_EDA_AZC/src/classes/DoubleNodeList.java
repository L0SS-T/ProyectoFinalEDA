package classes;
public class DoubleNodeList {
    private Node head;
    private Node tail;

    public DoubleNodeList() {
        this.head = null;
        this.tail = null;
    }

    public boolean esListaVacia(){
        if (head == null){
            return true;
        } else {
            return false;
        }
    }

    public void addBefore(Procedure value, Procedure ref){
        if(esListaVacia()){ //Verifica si la lista está vacía
            System.out.println("Lista vacia, no se puede insertar.");
        } else {
            Node ptr = head; //Puntero para buscar el nodo de referencia
            //Busca el nodo con valor == ref
            while(ptr != null && ptr.getValue() != ref){
                ptr = ptr.getNext();
            }
            Node newNode = new Node(value); //Crea el nuevo nodo
            if (ptr!=null){ //Si se encontró el nodo referencia
                if(ptr.getPrev() != null){ //Si no es el primer nodo
                Node temp = ptr.getPrev(); //Nodo anterior al de referencia
                temp.setNext(newNode); //El anterior ahora apunta al nuevo
                ptr.setPrev(newNode); //El de referencia apunta al nuevo nodo
                newNode.setNext(ptr); //El nuevo apunta al de referencia
                newNode.setPrev(temp); //El nuevo apunta al anterior
            } else { //Si el nodo de referencia es la cabeza
                addHead(value); //Inserta al inicio (reutiliza addHead())
                }
        } else { //No encontró al nodo de referencia
                System.out.println("No se encontro el valor de referencia.");
            }
        }
    }

    public void addHead(Procedure value){
        Node newNode = new Node(value); //Crea al nuevo nodo
        if (esListaVacia()){ //Si la lista está vacía
            head = newNode; //La cabeza y cola apuntan al nuevo nodo
            tail = newNode;
        } else { //Si no esta vacía
            newNode.setNext(head); //El nuevo nodo apunta a la cabeza
            head.setPrev(newNode); //Antigua cabeza apunta al nuevo nodo
            head = newNode; //Actualiza la cabeza al nuevo nodo
        }
    }

    public void addTail(Procedure value){
        Node newNode = new Node(value); //Crea nuevo
        if (esListaVacia()){ //Si la lista esta vacía
            head = newNode; //La cabeza apunta al nuevo nodo
            tail = newNode; //La cola apunta al nuevo nodo
        } else { //Si la lista no está vacía
            newNode.setPrev(tail); //El nuevo nodo apunta a la cola
            tail.setNext(newNode); //La antigua cola apunta al nuevo nodo
            tail = newNode; //Actualiza la cola al nuevo nodo
        }
    }

    public void showHead(){
        Node ptr = head; //Puntero auxiliar
        while(ptr != null){ //Mientras haya nodos
            System.out.print(ptr.getValue() + " --> "); //Se imprime valor referente
            ptr = ptr.getNext(); //Avanza al siguiente nodo
        }
        System.out.println("null"); //Indica final de la lista
    }

    public void showTail(){
        Node ptr = tail; //Puntero auxiliar

        while(ptr != null){ //Mientras haya nodos
            System.out.print(ptr.getValue() + " <-- "); //Se imprime valor referente
            ptr = ptr.getPrev(); //Retrocede al nodo anterior
        }
        System.out.println("null"); //Indica final lista enlazada
    }

    public void remove(Procedure value){
        if (esListaVacia()){ //Si la lista está vacía
            System.out.println("Lista vacia");
        } else { //Si no esta vacía
            Node ptr = head; //Puntero auxiliar
            //Buscado nodo con el valor: "value"
            while (ptr != null && ptr.getValue() != value){
                ptr = ptr.getNext(); //Se dirige al siguiente nodo
            }
            if (ptr != null){ //Si encontró al nodo
                if (ptr == head){ //Si es la cabeza
                    head = ptr.getNext(); //Nueva cabeza apunta al siguiente nodo
                    head.setPrev(null); //Antigua cabeza no tiene anterior
                } else if (ptr == tail){ //Si es la cola
                   tail = ptr.getPrev(); //Nueva cola es el nodo anterior
                   tail.setNext(null); //La nueva cola no tiene siguiente
                } else { //Si está en el medio
                Node temp = ptr.getPrev();
                temp.setNext(ptr.getNext()); //Al anterior salta al siguiente
                ptr.getNext().setPrev(temp); //El siguiente apunta al anterior
                }
            } else {
                System.out.println("No se encontro el elemento a elminiar");
            }
        }
    }
}
