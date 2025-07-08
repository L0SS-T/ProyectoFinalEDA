package mainpackage;
import classes.Node;
import classes.Node_List;
import java.time.LocalDate;

import javax.swing.JOptionPane;

import classes.Procedure;
import classes.ProcedureRepository;
import classes.Queue;
import java.awt.Color;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class ULima_procedures extends javax.swing.JFrame {

    Node_List procedures = ProcedureRepository.getProcedimientos();
    Procedure proced = new Procedure();
    
    public ULima_procedures() {
        initComponents();
        verificarTramitesPendientes(); 
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        jButton3 = new javax.swing.JButton();
        jButton4 = new javax.swing.JButton();
        jButton5 = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/images/ULima_logo_99.png"))); // NOI18N

        jButton1.setText("Registrar trámite");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jButton2.setText("Editar trámite");
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        jLabel2.setText("Seleccione la acción a realizar:");

        jButton3.setBackground(new java.awt.Color(255, 102, 0));
        jButton3.setText("No hay tramites por atender");
        jButton3.setEnabled(false);
        jButton3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton3ActionPerformed(evt);
            }
        });

        jButton4.setText("Seguimiento de trámites");
        jButton4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton4ActionPerformed(evt);
            }
        });

        jButton5.setText("Finalizar trámite");
        jButton5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton5ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addGap(0, 0, Short.MAX_VALUE)
                        .addComponent(jButton3))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addGroup(layout.createSequentialGroup()
                                    .addContainerGap()
                                    .addComponent(jLabel1))
                                .addGroup(layout.createSequentialGroup()
                                    .addGap(110, 110, 110)
                                    .addComponent(jLabel2)))
                            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                .addComponent(jButton5, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(jButton2, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(jButton4, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(jButton1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                        .addGap(0, 104, Short.MAX_VALUE)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 52, Short.MAX_VALUE)
                .addComponent(jLabel2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jButton4)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton5)
                .addGap(44, 44, 44)
                .addComponent(jButton3)
                .addContainerGap())
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        this.setVisible(false);
        new Register_procedure().setVisible(true);
        verificarTramitesPendientes(); 
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed

        String procedureId = JOptionPane.showInputDialog("Ingrese el expediente a editar:");
        //aquí debe validarse el procedureID y luego mostrar si está o no disponible. Dejare un código que tienen que editar
        if(esNumeroExpedienteValido(procedureId)){ //editar
            Procedure proced = ProcedureRepository.buscarPorNumeroExp(procedureId);
        this.setVisible(false);
        Edit_procedure e = new Edit_procedure(procedureId);
        e.setVisible(true);
        
        
        }
        else
        {
            JOptionPane.showMessageDialog(rootPane, "No se encontro el expediente ingresado", "Error", JOptionPane.ERROR_MESSAGE);
        }
        
        verificarTramitesPendientes(); 
        
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
        this.setVisible(false);
        new Pending_procedures().setVisible(true);
    }//GEN-LAST:event_jButton3ActionPerformed

    private void jButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
        this.setVisible(false);
        new Procedure_following().setVisible(true);
        verificarTramitesPendientes();
    }//GEN-LAST:event_jButton4ActionPerformed

    private void jButton5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton5ActionPerformed
        String procedureId = JOptionPane.showInputDialog(null, "Ingrese el numero de expediente:");
        if (procedureId != null){
            
            if(esNumeroExpedienteValido(procedureId)){
                
        	proced= ProcedureRepository.buscarPorNumeroExp(procedureId);
                System.out.println(proced.getNprioridad());
                if(proced!=null){
                    if(proced.getEstado().equals("En proceso")){
                        Queue cola = ProcedureRepository.getCola(), earlier = new Queue(), higherP = new Queue();
                        cola.printCola();
                        Procedure ptr = cola.desencolar();
                        do{
                            
                            if (ptr.getNprioridad()>proced.getNprioridad()){
                                higherP.encolar(ptr);
                            }
                            else if (ptr.getNprioridad()==proced.getNprioridad() && ptr.getExpediente()<proced.getExpediente()){
                                earlier.encolar(ptr);
                            }
                            ptr = cola.desencolar();
                        } while(ptr!=null);
                        
                        if (!earlier.isEmpty()||!higherP.isEmpty()){
                            int op = JOptionPane.showOptionDialog(
                            null,
                            "Se encontraron trámites de mayor prioridad/antiguedad. ¿Desea continuar?",
                            "Advertencia",
                            JOptionPane.YES_NO_OPTION,
                            JOptionPane.WARNING_MESSAGE, null, new Object[] {"Proceder", "Mostrar"}, "Proceder"
                            );
                            

                        if (op == JOptionPane.YES_OPTION) {
                            proced.setEstado("Finalizado");
                            proced.setFecha_hora_fin(DatetoString(LocalDateTime.now(), "yyyy-MM-dd HH:mm:ss"));
                            ProcedureRepository.actualizar(proced);
                            JOptionPane.showMessageDialog(
                                    null,
                                    "La operación se realizó con éxito.",
                                    "Éxito",
                                    JOptionPane.INFORMATION_MESSAGE
                            );
                            } else if (op == JOptionPane.NO_OPTION) {
                                JOptionPane.showMessageDialog(
                                        null,
                                        higherP.printCola()+
                                        earlier.printCola(),
                                        "Advertencia",
                                        JOptionPane.WARNING_MESSAGE
                                );
                                
                            }     
                        }
                        else{
                            proced.setEstado("Finalizado");
                            proced.setFecha_hora_fin(DatetoString(LocalDateTime.now(), "yyyy-MM-dd HH:mm:ss"));
                            ProcedureRepository.actualizar(proced);
                            JOptionPane.showMessageDialog(
                                    null,
                                    "La operación se realizó con éxito.",
                                    "Éxito",
                                    JOptionPane.INFORMATION_MESSAGE
                            );
                        }
                        
                    }

                }
                else{
                    JOptionPane.showMessageDialog(rootPane, "No se encontro el expediente ingresado", "Error", JOptionPane.ERROR_MESSAGE);
                }
            }
            else{
                JOptionPane.showMessageDialog(rootPane, "No se encontro el expediente ingresado", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
        verificarTramitesPendientes();
    }//GEN-LAST:event_jButton5ActionPerformed


    public static boolean esNumeroExpedienteValido(String numeroExpediente) {
        if (numeroExpediente == null || !numeroExpediente.matches("\\d{4}-\\d{4}")) {
            JOptionPane.showMessageDialog(null,
                    "El número de expediente debe tener el formato AAAA-NNNN (por ejemplo, 2025-0001).",
                    "Formato inválido", JOptionPane.WARNING_MESSAGE);
            return false;
        }

        String[] partes = numeroExpediente.split("-");
        try {
            int año = Integer.parseInt(partes[0]);
            int correlativo = Integer.parseInt(partes[1]);

            if (año < 2000 || año > LocalDate.now().getYear()) {
                JOptionPane.showMessageDialog(null,
                        "El año del expediente debe estar entre 2000 y el año actual.",
                        "Año inválido", JOptionPane.WARNING_MESSAGE);
                return false;
            }

            if (correlativo <= 0) {
                JOptionPane.showMessageDialog(null,
                        "El correlativo del expediente debe ser mayor a 0.",
                        "Correlativo inválido", JOptionPane.WARNING_MESSAGE);
                return false;
            }

            return true;
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null,
                    "El número de expediente contiene datos no numéricos.",
                    "Error de formato", JOptionPane.WARNING_MESSAGE);
            return false;
        }
    }
    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(ULima_procedures.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(ULima_procedures.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(ULima_procedures.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(ULima_procedures.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            @Override
			public void run() {
                new ULima_procedures().setVisible(true);
            }
        });
    }
    
    private void verificarTramitesPendientes() {
    Node ptr = procedures.getFirst();
    boolean hayPendientes = false;

    while (ptr != null) {
        Procedure p = ptr.getValue();
        if (p.getEstado().equalsIgnoreCase("En proceso")) {
            hayPendientes = true;
            break;
        }
        ptr = ptr.getNext();
    }
    
    if (hayPendientes) {
        jButton3.setEnabled(true);
        jButton3.setText("Tiene expedientes por atender");
        jButton3.setForeground(Color.white);
    } 
    else{jButton3.setEnabled(false);
    jButton3.setText("No hay expedientes por atender");}
    }
    
    private String DatetoString(LocalDateTime fecha, String formato) {
    	if (fecha == null || formato == null || formato.isBlank()) {
            return "";
        }

        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(formato);
            return fecha.format(formatter);
        } catch (Exception e) {
            System.err.println("Error al formatear la fecha: " + e.getMessage());
            return "";}}

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JButton jButton4;
    private javax.swing.JButton jButton5;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    // End of variables declaration//GEN-END:variables
}
