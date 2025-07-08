package classes;
public class Tree {
    private Procedure valor;
    private Tree left, right;

    public Tree(Procedure valor){
        this.valor = valor;
        this.left = null;
        this.right = null;
    }

    public Procedure valor(){
        return valor;
    }

    public Tree right(){
        return right;
    }

    public Tree left(){
        return left;
    }

    public void setLeft(Tree nodo){
        this.left = nodo;
    }

    public void setRight(Tree nodo){
        this.right = nodo;
    }

    public void setValor(Procedure val){
        this.valor = val;
    }


}
