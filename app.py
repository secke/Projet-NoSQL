import sys
sys.path.append('.')
sys.path.append('..')
from flask import Flask,render_template, url_for,redirect,request,session

# import requests
from  controller import config


app=Flask(__name__)


app.config['SECRET_KEY']='testneo4j'




@app.route('/', methods=('POST','GET'))
def connexion():
    if request.method=='POST':
        nom=request.form.get('nom')
        session['nomUser']=nom
        email=request.form.get('email')
        session['emailUser']=email
        mp=request.form.get('mp')
        session['mpUser']=mp
        with config.driver.session() as Session:
            creation=Session.run(" MERGE (d:User {nom:$nom, email:$email,motPass:$mp}) ON CREATE SET d.nom=$nom,d.motPass=$mp,d.email=$email RETURN d",nom=nom,email=email,mp=mp)
            recherche=Session.run(" MATCH (d:User) RETURN d")
        if creation :
            elem=[(el["d"]['nom'],el["d"]['email'],el["d"]['motPass']) for el in creation]
            # print(elem[0][0])
            nomValid,email,mp=elem[0][0],elem[0][1],elem[0][2]
        elif recherche:
            elem=[(el["d"]['nom'],el["d"]['email'],el["d"]['motPass']) for el in recherche]
        if nom=='data':
            # print(elem[0][0])
            return redirect(url_for('pageAdmin'))
        elif nom==nomValid:
            return redirect(url_for('pageUsers'))
        else:
            return render_template('pageConnexion.html')
    else:
        return render_template('pageConnexion.html')
         

@app.route('/pageAdmin', methods=['POST','GET'])
def pageAdmin():
    

    if request.method=='POST':
        nom=request.form.get('nom')
        email=request.form.get('email')
        mp=request.form.get('mp')
        with config.driver.session() as Session:
            Session.run(" CREATE (d:User {nom:$nom,email:$email,motPass:$mp})",nom=nom, mp=mp,email=email)
            resultat=Session.run(" MATCH (d:User) RETURN d")
            elem=[(el["d"]['nom'],el["d"]['email'],el["d"]['motPass']) for el in resultat]
        return render_template('pageAdmin.html',elem=elem)
        
    else:
        with config.driver.session() as Session:
            resultat=Session.run(" MATCH (d:User) RETURN d")
            elem=[(el["d"]['nom'],el["d"]['email'],el["d"]['motPass']) for el in resultat]
        # print(elem)
        # long=len(elem)
        return render_template('pageAdmin.html',elem=elem)

    # print(long)
    # return render_template('pageAdmin.html',elem=elem,long=long)


@app.route('/pageUsers', methods=('POST','GET'))
def pageUsers():
    
    prenom=request.form.get('prenom')
    nom=session['nomUser']
    email=session['emailUser']
    adresse=request.form.get('adresse')
    tel=request.form.get('tel')
    age=request.form.get('age')
    profession=request.form.get('prof')
    sexe=request.form.get('sexe')

    with config.driver.session() as Session:
        Session.run(" MATCH (d:User {nom:$nom}) SET d.prenom=$prenom,d.adresse=$adresse, d.tel=$tel, d.age=$age, d.profession=$profession, d.sexe=$sexe",prenom=prenom,nom=nom,tel=tel,adresse=adresse, profession=profession,age=age,sexe=sexe)
        resultat=Session.run(" MATCH (d:User) WHERE d.nom=$nom RETURN d",nom=nom)
        elem=[(el["d"]['prenom'],el["d"]['nom'],el["d"]['tel'],el["d"]['adresse'],el["d"]['email'],el["d"]['profession'],el["d"]['age'],el["d"]['sexe']) for el in resultat]
        elements=elem[-1]
        ###### recupération du prénom de l'arrière gp
        agp=Session.run("MATCH (u:User {nom:$nom})<-[:ARRIERE_GRAND_PERE]-(ap:User) RETURN ap.prenom as prenom",nom=nom)
        recuprAGP=[el['prenom'] for el in agp]
        preARGP=recuprAGP[0]
        ###### recupération du prénom du gp

        gp=Session.run("MATCH (u:User {nom:$nom})<-[:GRAND_PERE]-(gp:User) RETURN gp.prenom as prenom",nom=nom)
        recuprGP=[el['prenom'] for el in gp]
        preGP=recuprGP[0]
        ###### recupération du prénom du père

        p=Session.run("MATCH (u:User {nom:$nom})<-[:PERE]-(p:User) RETURN p.prenom as prenom",nom=nom)
        recuprP=[el['prenom'] for el in p]
        preP=recuprP[0]
        ###### recupération du prénom de la mère

        m=Session.run("MATCH (u:User {nom:$nom})<-[:MERE]-(p:User) RETURN p.prenom as prenom",nom=nom)
        recuprM=[el['prenom'] for el in m]
        preM=recuprM[0]
        ###### recupération du prénom de la femme

        f=Session.run("MATCH (u:User {nom:$nom})-[:EPOUX]->(p:User) RETURN p.prenom as prenom",nom=nom)
        recuprF=[el['prenom'] for el in f]
        preF=recuprF[0]
        ###### recupération du prénom de l'ami

        ami=Session.run("MATCH (u:User {nom:$nom})-[:AMI]->(p:User) RETURN p.prenom as prenom",nom=nom)
        recuprAmi=[el['prenom'] for el in ami]
        preAmi=recuprAmi[0]
    return render_template('pageUsers.html',elements=elements,preARGP=preARGP,preGP=preGP,preP=preP,preM=preM,prenom=prenom,preF=preF,preAmi=preAmi)
    # return render_template('pageUsers.html')
@app.route('/deconnection')
def deconnection():
    session.pop('nomUser',None)
    return redirect(url_for('connexion'))









if __name__=='__main__':
    app.run(debug=True)