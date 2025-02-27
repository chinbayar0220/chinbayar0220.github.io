import mysql.connector

conn = mysql.connector.connect(
    host="localhost",   
    user="root",        
    password="",        
    database="ecommerce_ddd"  
)

cursor = conn.cursor()


cursor.execute("INSERT INTO User_role (role_name) VALUES (%s)", ("Customer",))
cursor.execute("INSERT INTO User_role (role_name) VALUES (%s)", ("Administrator",))

cursor.execute("INSERT INTO User (name, phone, email, address, role_id) VALUES (%s, %s, %s, %s, %s)", 
               ("Бат", "99001122", "bat@example.com", "Улаанбаатар", 1))
cursor.execute("INSERT INTO User (name, phone, email, address, role_id) VALUES (%s, %s, %s, %s, %s)", 
               ("Сараа", "99112233", "saraa@example.com", "Дархан", 2))

cursor.execute("INSERT INTO Product (name, price, type) VALUES (%s, %s, %s)", 
               ("бууз", 2500.00, "бууз"))
cursor.execute("INSERT INTO Product (name, price, type) VALUES (%s, %s, %s)", 
               ("Банштай цай", 5000.00, "банш"))

cursor.execute("INSERT INTO `Order` (user_id, total_price) VALUES (%s, %s)", 
               (1, 7500.00))

cursor.execute("INSERT INTO Order_Product (order_id, product_id, quantity) VALUES (%s, %s, %s)", 
               (1, 1, 2))
cursor.execute("INSERT INTO Order_Product (order_id, product_id, quantity) VALUES (%s, %s, %s)", 
               (1, 2, 1))

cursor.execute("INSERT INTO Delivery (order_id, delivery_status, delivery_address) VALUES (%s, %s, %s)", 
               (1, "хүлээгдэж байна", "Улаанбаатар хот"))

cursor.execute("INSERT INTO Payment (order_id, payment_method, payment_status) VALUES (%s, %s, %s)", 
               (1, "карт", "төлөгдсөн"))

cursor.execute("INSERT INTO Feedback (user_id, order_id, rating, comment) VALUES (%s, %s, %s, %s)", 
               (1, 1, 5, "Маш сайн үйлчилгээтэй байлаа!"))

cursor.execute("INSERT INTO Refund (order_id, reason, refund_status) VALUES (%s, %s, %s)", 
               (1, "Буруу бүтээгдэхүүн ирсэн", "батлагдсан"))

conn.commit()

print("Өгөгдөл амжилттай нэмэгдлээ!")

cursor.close()
conn.close()
