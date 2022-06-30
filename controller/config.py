# from lib2to3.pgen2 import driver
# from re import L
# import re
# from unittest import result
from neo4j import GraphDatabase
# from requests import request
driver=GraphDatabase.driver("neo4j://localhost:7687",auth=('neo4j', 'secke'))
# driver.verify_connectivity()

# with driver.session() as session:
    # resultat=session.run("""match (s:Personne {nom:$salam}) match (d:Apprenant {nom:$nom}) merge (s)-[:AMI]->(d)""", nom="dème", salam="salam")
    # resultat=session.run(" MATCH (d:Apprenant {nom:'dème'}) RETURN d")
    # resultat=session.run(" CREATE (d:Apprenant {nom:'dème'}) RETURN d")
    # print(resultat)
    # execut=session.begin_transaction()
    # [print(el["d"]['nom']) for el in resultat]

# with session.begin_transaction() as execut:


