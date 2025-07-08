package classes;
public class Procedure {
    private String Fecha_hora_inicio;
    private int expediente;
    private String numeroexp;
    private String prioridad;
    private String Fecha_hora_fin;
    private String estado;
    private String asunto;
    private String dni;
    private String nombre;
    private String telefono;
    private String email;
    private String documentoReferencia;

    public Procedure() {
    }

    public Procedure(String Fecha_hora_inicio, int expediente,String numeroexp, String prioridad, String Fecha_hora_fin, String estado, String asunto, String dni, String nombre, String telefono, String email, String documentoReferencia) {
        this.Fecha_hora_inicio = Fecha_hora_inicio;
        this.expediente = expediente;
        this.numeroexp=numeroexp;
        this.prioridad = prioridad;
        this.Fecha_hora_fin = Fecha_hora_fin;
        this.estado = estado;
        this.asunto = asunto;
        this.dni = dni;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.documentoReferencia = documentoReferencia;
    }

    public String getFecha_hora_inicio() {
        return Fecha_hora_inicio;
    }

    public void setFecha_hora_inicio(String Fecha_hora_inicio) {
        this.Fecha_hora_inicio = Fecha_hora_inicio;
    }

    public int getExpediente() {
        return expediente;
    }

    public void setExpediente(int expediente) {
        this.expediente = expediente;
    }

    public String getPrioridad() {
        return prioridad;
    }

    public void setPrioridad(String prioridad) {
        this.prioridad = prioridad;
    }

    public String getFecha_hora_fin() {
        return Fecha_hora_fin;
    }

    public void setFecha_hora_fin(String Fecha_hora_fin) {
        this.Fecha_hora_fin = Fecha_hora_fin;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDocumentoReferencia() {
        return documentoReferencia;
    }

    public void setDocumentoReferencia(String documentoReferencia) {
        this.documentoReferencia = documentoReferencia;
    }

	public String getNumeroexp() {
		return numeroexp;
	}

	public void setNumeroexp(String numeroexp) {
		this.numeroexp = numeroexp;
	}

    private int convertirPrioridad(String prioridad) {
        switch (prioridad) {
            case "Alta":
                return 3;
            case "Media":
                return 2;
            case "Baja":
                return 1;
            default:
                return 0;
        }
    }
    
    public int getNprioridad(){
        return convertirPrioridad(prioridad);}

}
