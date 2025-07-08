package classes;

import java.time.LocalDate;

public class ProcedureRepository {

    // Sustituye List<Procedure> por Node_List
    private static final Node_List procedimientos = new Node_List();
    private static final Queue cola = new Queue();
    private static final Stack pila = new Stack();
    private static final BinarySearchTree arbol = new BinarySearchTree();
    private static Procedure procedureselec = new Procedure();
    
    public static int proceduresCounter=1;
    
    public static Node_List getProcedimientos() {
        return procedimientos;
    }

    public static Queue getCola() {
        return cola;
    }

    public static BinarySearchTree getArbol() {
        return arbol;
    }

    public static Stack getPila() {
        return pila;
    }

    public static void agregar(Procedure p) {
        procedimientos.addLast(p);
        cola.encolar(p);
        arbol.insertar(p);
    }

    public static void deshacer() {
        // Suponemos que siempre se elimina el último insertado
        // Aquí puede usarse lógica para llevar un seguimiento si se desea más control
        // Necesitamos encontrar el último procedimiento
        Procedure ultimo = getUltimoProcedimiento();
        if (ultimo != null) {
            procedimientos.remove(ultimo);
            pila.push(ultimo);
            arbol.delete(ultimo);
        }
    }

    public static void limpiar() {
        // No hay método de limpiar en Node_List, deberías agregarlo si lo deseas
        // Aquí asumiremos que recreamos una nueva instancia
        while (getUltimoProcedimiento() != null) {
            procedimientos.removeLast();
        }
        cola.clear();
        pila.clear();
        arbol.clear();
    }

    public static void retirar(Procedure p) {
        if (p != null) {
            procedimientos.remove(p);
            arbol.delete(p);
            pila.push(p);
        }
    }

    public static Procedure buscarPorNumeroExp(String numero) {
        return arbol.buscarPorNumeroExpediente(numero);
    }

    public static boolean actualizar(Procedure actualizado) {
        Node ptr = procedimientos.getFirst();
        while (ptr != null) {
            if (ptr.getValue().getNumeroexp().equals(actualizado.getNumeroexp())) {
                ptr.setValue(actualizado);
                arbol.actualizarProcedure(actualizado);
                return true;
            }
            ptr = ptr.getNext();
        }
        return false;
    }

    public static void restaurarUltimoDeshecho() {
        if (!pila.isEmpty()) {
            Procedure restaurado = pila.pop();
            agregar(restaurado);
        }
    }

    public static String generarCodigoExpediente(Node_List lista) {
        int añoActual = LocalDate.now().getYear();
        int ultimoCorrelativo = 0;

        Node ptr = lista.getFirst();
        while (ptr != null) {
            Procedure p = ptr.getValue();
            String codigo = p.getNumeroexp(); // ejemplo: 2025-0012
            if (codigo != null && codigo.startsWith(String.valueOf(añoActual))) {
                String[] partes = codigo.split("-");
                if (partes.length == 2) {
                    try {
                        int correlativo = Integer.parseInt(partes[1]);
                        if (correlativo > ultimoCorrelativo) {
                            ultimoCorrelativo = correlativo;
                        }
                    } catch (NumberFormatException ignored) {
                    }
                }
            }
            ptr = ptr.getNext();
        }

        int nuevoCorrelativo = ultimoCorrelativo + 1;
        String correlativoFormateado = String.format("%04d", nuevoCorrelativo);

        return añoActual + "-" + correlativoFormateado;
    }

    public static int obtenerCorrelativo(String codigoExpediente) {
        if (codigoExpediente == null || !codigoExpediente.contains("-")) {
            return 0;
        }

        String[] partes = codigoExpediente.split("-");
        if (partes.length != 2) {
            return 0;
        }

        try {
            return Integer.parseInt(partes[1]);
        } catch (NumberFormatException e) {
            return 0;
        }
    }

    public static void seleccionarProcedure(Procedure p) {
        procedureselec = p;
    }

    public static Procedure getProcedureselec() {
        return procedureselec;
    }

    // Método auxiliar: obtener el último Procedure en Node_List
    private static Procedure getUltimoProcedimiento() {
        Node ptr = procedimientos.getFirst();
        if (ptr == null) return null;
        while (ptr.getNext() != null) {
            ptr = ptr.getNext();
        }
        return ptr.getValue();
    }
}