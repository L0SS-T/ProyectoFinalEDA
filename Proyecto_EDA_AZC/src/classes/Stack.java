package classes;
public class Stack {
    private static final int MAX_SIZE = 50;
    private  Procedure[] data;
    private int top;

    public Stack(){
        data = new Procedure[MAX_SIZE];
        top = -1;
    }

    public boolean isEmpty(){
	boolean ans = (top == -1);
	return ans;
    }

    public boolean isFull(){
	boolean ans = (top + 1 == MAX_SIZE);
	return ans;
    }

    public void push(Procedure item){
	if(!isFull()){
            top++;
            data[top] = item;
	}
    }

    public Procedure pop(){
        if (isEmpty()){
            System.out.println("Pila vacia");
            return null;
        }
        Procedure value = data[top];
        top--;
        return value;
    }

    public void clear() {
        for (int i = 0; i <= top; i++) {
            data[i] = null; // elimina referencias para liberar memoria
        }
        top = -1; // reinicia el tope
    }
}
