package classes;
public class BinarySearchTree {
    private Tree raiz;

    public BinarySearchTree(){
        this.raiz = null;
    }

    public void preOrden(){
        System.out.print("Preorden: ");
        printPreorder(raiz);
        System.out.println();
    }

    private void printPreorder(Tree root){
        if(root != null){
            System.out.print(root.valor() + "  ");
            printPreorder(root.left());
            printPreorder(root.right());
        }
    }

    public void inOrden(){
        System.out.print("Inorden: ");
        printInorder(raiz);
        System.out.println();
    }

    private void printInorder(Tree root){
        if(root != null){
            printInorder(root.left());
            System.out.print(root.valor() + "  ");
            printInorder(root.right());
        }
    }

    public void PostOrden(){
        System.out.print("Postorden: ");
        printPostorder(raiz);
        System.out.println();
    }

    private void printPostorder(Tree root){
        if(root != null){
            printPostorder(root.left());
            printPostorder(root.right());
            System.out.print(root.valor() + "  ");
        }
    }

    public void insertar(Procedure valor){
        this.raiz = insertRec(this.raiz, valor);
    }

    private Tree insertRec(Tree root, Procedure item){
        //Arbol vacio: creamos un nuevo nodo
        if (root == null){
            return new Tree(item);
        }

        if(item.getExpediente() < root.valor().getExpediente()){
            root.setLeft(insertRec(root.left(), item));
        }
        else {
            root.setRight(insertRec(root.right(), item));
        }
        return root;
    }

    public boolean search(Procedure item){
        return searchRec(raiz, item);
    }

    private boolean searchRec(Tree root, Procedure item){
	if(root == null){     //Arbol vacio, no encontraremos el valor
            return false;
        }
	if(root.valor() == item){
		return true;   //Si coincide con la raiz, encontramos el valor
	}
        if(item.getExpediente() < root.valor().getExpediente()){
            return searchRec(root.left(), item);
	}else{
            //En caso contrario, buscamos a la derecha
            return searchRec(root.right(), item);
        }
    }

    public void delete(Procedure item){
        raiz = deleteRec(raiz, item);
    }

    private Tree deleteRec(Tree root, Procedure item){
        if (root == null) {
			return null;
		}

        if (item.getExpediente() < root.valor().getExpediente()){
            root.setLeft(deleteRec(root.left(), item));
        }
        else if(item.getExpediente() > root.valor().getExpediente()){
            root.setRight(deleteRec(root.right(), item));
        }
        else
        {
            //caso 1
            if (root.left() == null && root.right()==null){
                return null;
            }
            //caso 2
            if(root.right()==null) {
				return root.left();
			}
            if(root.left()==null) {
				return root.right();
			}
            //caso 3
            Tree newRoot = minimo(root.right());
            root.setValor(newRoot.valor());
            root.setRight(deleteRec(root.right(), newRoot.valor()));
        }

        return root;
    }

    private Tree minimo(Tree nodo){
        while (nodo.left()!=null){
            nodo = nodo.left();
        }
        return nodo;
    }

    public Tree raiz(){
        return raiz;
    }

    public Procedure buscarPorNumeroExpediente(String numeroExp) {
        return buscarPorNumeroExpedienteRec(this.raiz, numeroExp);
    }

    public Procedure buscarPorNumeroExpedienteRec(Tree nodo, String numeroExp) {
        if (nodo == null) {
            return null;
        }

        if (nodo.valor().getNumeroexp().equals(numeroExp)) {
            return nodo.valor();
        }

        // Buscar recursivamente en el subárbol izquierdo
        Procedure izquierda = buscarPorNumeroExpedienteRec(nodo.right(), numeroExp);
        if (izquierda != null) {
			return izquierda;
		}

        // Buscar recursivamente en el subárbol derecho
        return buscarPorNumeroExpedienteRec(nodo.left(), numeroExp);
    }

    public boolean actualizarProcedure(Procedure nuevo) {
        Tree nodo = buscarNodoPorExpediente(this.raiz, nuevo.getExpediente());
        if (nodo != null) {
            nodo.setValor(nuevo); // reemplaza el objeto completo
            return true;
        }
        return false;
    }

    private Tree buscarNodoPorExpediente(Tree nodo, int expediente) {
        if (nodo == null) {
			return null;
		}

        if (expediente == nodo.valor().getExpediente()) {
            return nodo;
        } else if (expediente < nodo.valor().getExpediente()) {
            return buscarNodoPorExpediente(nodo.right(), expediente);
        } else {
            return buscarNodoPorExpediente(nodo.left(), expediente);
        }
    }

    public void clear() {
        this.raiz = null;
    }
}
