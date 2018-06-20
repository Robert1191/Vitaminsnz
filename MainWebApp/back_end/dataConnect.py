import psycopg2

class dataConnect():
    def __init__(self):
        self.conn = False
        self.cursor = False

    def createConnection(self):
        try:
            self.conn = psycopg2.connect(
                "dbname='ATFurniture' user='postgres' host='139.59.247.68' password='lkahuy91' port='5432'")
            self.conn.set_client_encoding('UTF8')
            self.cursor = self.conn.cursor()
            return self.cursor
        except:
            return False

    def closeConnection(self):
        self.conn.close()

    def commit(self):
        self.conn.commit()

    # def connection(self):
    #     try:
    #         conn = psycopg2.connect(
    #             "dbname='ATFurniture' user='postgres' host='139.59.247.68' password='lkahuy91' port='5432'")
    #         return conn
    #     except:
    #         return False