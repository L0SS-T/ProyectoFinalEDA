package classes;
public class CircularNodeList {
    Node L;

    public CircularNodeList() {
        this.L = null;
    }

    public void addFirst(Procedure value){
        Node newNode = new Node(value); //Crear un nuevo nodo
        if (L != null){ //Si la lista no esta vacía
            Node ptr = L; //Puntero auxiliar para recorrer la lista
            while(ptr.getNext() != L){ //Busca el último nodo (el que apunta a L)
                ptr = ptr.getNext();
            }
            newNode.setNext(L); //El nuevo nodo apunta a la antigua cabeza
            ptr.setNext(newNode); //El ultimo nodo apunta al nuevo nodo
            L = newNode; //Actualiza L para que sea el nuevo nodo

        } else {
            L = newNode; //L apunta al nuevo nodo
            newNode.setNext(L); //Se apunta a si mismo (circularidad)
        }
    }

    public void addLast(Procedure value){
        Node newNode = new Node(value); //Crear un nuovo
        if (L == null){ //Si la lista está vacía
            addFirst(value); //Reutiliza addFirst() para insertar
        } else { //Si la lista no está vacía
            Node ptr = L; //Puntero auxiliar
            //Busca el último nodo (el que apunta a L)
            while(ptr.getNext() != L){
                ptr = ptr.getNext();
            }
            ptr.setNext(newNode); //El último nodo apunta al nuevo nodo
            newNode.setNext(L); //El nuevo nodo apunta a la cabeza (circularidad)
        }
    }

    public void removeFirst(){
        if (L == L.getNext()){ //Si solo hay un nodo (se apunta a si mismo)
                L = null; //La lista queda vacía
            } else { //Si hay múltiples nodos
            Node ptr = L;
            //Busca al último nodo (que apunta a L)
            while(ptr.getNext() != L){
                ptr = ptr.getNext();
            }
            L = L.getNext(); //L ahora apunta al segundo nodo
            ptr.setNext(L); //El último nodo apunta al nuevo L
        }
    }

    public void removeValue(Procedure ref){
        if (L != null){ //Si la lista no está vacía
            Node ptr = L; //Puntero para buscar el nodo
            Node prev = null; //Puntero al nodo anterior
            //Caso 1: Eliminar al único nodo (coincide con ref)
            if (L.getValue() == ref && L == L.getNext()){
                removeFirst(); //Reutiliza removeFirst()
                return;
            }
            //Caso 2: Eliminar la cabeza (lista con múltiples nodos)
            if (L.getValue() == ref && L != L.getNext()){
                //Busca al último nodo
                while (ptr.getNext() != L){
                    ptr = ptr.getNext();
                }
                L = L.getNext(); //La nueva cabeza es el nuevo nodo
                ptr.setNext(L); //El nuevo nodo apunta a la cabeza

            } else {
                //Caso 3: Buscar al nodo en el medio o al final
                while (ptr.getNext() != L && ptr.getValue() != ref){
                    prev = ptr;
                    ptr = ptr.getNext();
                }
                //Si se encontró al nodo con ref
                if (ptr.getValue() == ref){
                    prev.setNext(ptr.getNext()); //Salta al nodo a eliminar
                }
            }
        }
    }

    public void showElements(){
        if (L != null){ //Si la lista no está vacía
        Node ptr = L; //Puntero auxiliar
        //Recorre hasta el penúltimo nodo
        while(ptr.getNext() != L){
            System.out.print(ptr.getValue() + " --> ");
            ptr = ptr.getNext();
        }
        //Imprime al último nodo y su enlace circular
        System.out.print(ptr.getValue() + " --> ");
        System.out.println(ptr.getNext().getValue() + " -->..." );
        } else {
            System.out.println("null"); //Lista vacía
        }
    }
}
