package classes;
public class Node {
    private Procedure value;
    private Node next;
    private Node prev;

    public Node(Procedure value) {
        this.value = value;
        next = null;
        prev = null;
    }

    public Procedure getValue() {
        return value;
    }

    public void setValue(Procedure value) {
        this.value = value;
    }

    public Node getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

     public Node getPrev() {
        return prev;
    }

    public void setPrev(Node prev) {
        this.prev = prev;
    }
}
