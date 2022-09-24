import os 
import shutil
import sys

os.chdir('documentos')

while(True):

    if os.path.exists("AcuseIVA"):
        pass
    else:
        os.mkdir('AcuseIVA')

    if os.path.exists("REPSE"):
        pass
    else:    
        os.mkdir('REPSE')

    if os.path.exists("Declaración IVA"):
        pass
    else:    
        os.mkdir('Declaración IVA')

    if os.path.exists("Acuse IMSS"):
        pass
    else:    
        os.mkdir('Acuse IMSS')

    if os.path.exists("Pago INFONAVIT"):
        pass
    else:    
        os.mkdir('Pago INFONAVIT')


    acuse_iva = [_ for _ in os.listdir() if "AcuseIVA" in _]
    for i in acuse_iva: 
        shutil.move(i, "AcuseIVA")

    repse = [_ for _ in os.listdir() if "REPSE" in _]
    for i in repse: 
        shutil.move(i, "REPSE")
    
    declaracion_iva = [_ for _ in os.listdir() if "DeclaracionIVA" in _]
    for i in declaracion_iva: 
        shutil.move(i, "Declaración IVA")


    acuse_imss = [_ for _ in os.listdir() if "AcuseIMSS" in _]
    for i in acuse_imss: 
        shutil.move(i, "Acuse IMSS")
    

    pago_infonavit = [_ for _ in os.listdir() if "Pago INFONAVIT" in _]
    for i in pago_infonavit: 
        shutil.move(i, "Pago INFONAVIT")



    
