package classes;
public class Node_List {
    private Node L;

    public Node_List() {
        this.L = null;
    }

    //CASOS BASE
    public void showElements(){
        //Obtener referencia al primer nodo (variable ptr)
        Node ptr = L;
        //Mientras existan más nodos a procesar
        while(ptr != null){
            //Procesamos la información del nodo actual: ptr.getValue()
            System.out.print(ptr.getValue() + " --> ");
            ptr = ptr.getNext();
        }
        //El último tendrá como salida "null"
        System.out.println("null");
    }

    public void addFirst(Procedure value){
        //Creación de nuevo nodo
        Node newNode = new Node(value);
        //Si la lista está vacía
        if (L == null){
            //Único elemento, no tiene sucesor
            newNode.setNext(null);
            //Si no está vacía la lista
        } else {
            //El sucesor de newNode debe ser el primero de la lista original
            newNode.setNext(L);
        }
        //El nodo inicial (L) de la lista enlazada ahora debe ser newNode
        L = newNode;
    }

    public void addLast(Procedure value){
        //Crear newNode
        Node newNode = new Node(value);
        //Si la lista está vacía, insertar al inicio
        if (L == null){
            addFirst(value);
        } else {
            //Si no está vacía, recorremos hasta encontrar el último nodo
            Node ptr = L;
            //Ultimo nodo: Aquel que tiene como siguiente valor (next): null
            while(ptr.getNext() != null){
                ptr = ptr.getNext();
            }
            ptr.setNext(newNode);
            //El siguiente del nodo creado debe ser el último (null)
            newNode.setNext(null);
        }
    }

    public void addBefore (Procedure item, Procedure ref){
        Node newNode = new Node(item);
       //ptr: nodo referencia
       //prev: nodo anterior a ptr
        Node ptr = L;
        Node prev = null;

        while (ptr != null && ptr.getValue() != ref){ //Se detiene al encontrar el elemento ref de referencia
            prev = ptr; //Antes de avanzar deja una referencia al elemento anterior
            ptr = ptr.getNext();
        } //Luego del bucle, "ptr" apunta al nodo ref para verificar su existencia

        if (ptr != null){ //Solo si existe el elemento con valor "ref"
            if (prev == null){ //Si el elemento encontrado es el primero
                addFirst(item); //Agregar el elemento al inicio
            } else {
                //El nodo anterior prev tendrá como sucesor al nodo que hemos creado
                prev.setNext(newNode);
                //El nodo siguiente de newNode debe ser el valor "ref" (ptr)
                newNode.setNext(ptr);
            }
        }
    }


    public void removeFirst(){
        if (L != null){ //Si la lista no está vacía
            L = L.getNext(); //L.getNext() es el nuevo nodo inicial
        }
    }

    public void removeLast(){
        Node ptr = L;
        Node prev = null;

        if (ptr != null){ //Lista no vacía
            while(ptr.getNext() != null){ //Para encontrar el último elemento
                prev = ptr;
                ptr = ptr.getNext();
            } //Al salir del bucle: ptr - ultimo nodo, prev - penultimo nodo
            if(prev == null){//Si la lista tiene solo un elemento
                removeFirst();
            } else {
                //Penultimo nodo ahora sera el ultimo
                prev.setNext(null);
            }
        }
    }

    public void remove(Procedure ref){
        if(L != null){ //Lista no vacía
            if(L.getValue() == ref){ //Si es el primer nodo
                removeFirst();
            } else {
                Node ptr = L.getNext();
                Node prev = L;
                //Buscar el nodo con valor ptr (ref) y su predecesor
                while(ptr != null && ptr.getValue() != ref){
                    prev = ptr;
                    ptr = ptr.getNext();
                }
                if (ptr != null){ //Si se encontró el nodo
                    prev.setNext(ptr.getNext());
                }
            }
        }
    }
    
    public Node getFirst() 
    {return L;}
 }
