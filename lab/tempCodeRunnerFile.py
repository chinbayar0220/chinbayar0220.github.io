import mysql.connector

conn = mysql.connector.connect(
    host="localhost",   
    user="root",        
    password="",        
    database="ecommerce_data"  # Өмнө нь үүсгэсэн өгөгдлийн сангийн нэр
)

cursor = conn.cursor()

# 1. User_role хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO User_role (role_name) VALUES (%s)", ("Customer",))
cursor.execute("INSERT INTO User_role (role_name) VALUES (%s)", ("Administrator",))

# 2. User хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO User (name, phone, email, address, role_id) VALUES (%s, %s, %s, %s, %s)", 
               ("Бат", "99001122", "bat@example.com", "Улаанбаатар", 1))
cursor.execute("INSERT INTO User (name, phone, email, address, role_id) VALUES (%s, %s, %s, %s, %s)", 
               ("Сараа", "99112233", "saraa@example.com", "Дархан", 2))

# 3. Product хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO Product (name, price, type) VALUES (%s, %s, %s)", 
               ("Гоймон", 2500.00, "буюу"))
cursor.execute("INSERT INTO Product (name, price, type) VALUES (%s, %s, %s)", 
               ("Банштай цай", 5000.00, "банш"))

# 4. Order хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO `Order` (user_id, total_price) VALUES (%s, %s)", 
               (1, 7500.00))

# 5. Order_Product хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO Order_Product (order_id, product_id, quantity) VALUES (%s, %s, %s)", 
               (1, 1, 2))
cursor.execute("INSERT INTO Order_Product (order_id, product_id, quantity) VALUES (%s, %s, %s)", 
               (1, 2, 1))

# 6. Delivery хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO Delivery (order_id, delivery_status, delivery_address) VALUES (%s, %s, %s)", 
               (1, "хүлээгдэж байна", "Улаанбаатар хот"))

# 7. Payment хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO Payment (order_id, payment_method, payment_status) VALUES (%s, %s, %s)", 
               (1, "карт", "төлөгдсөн"))

# 8. Feedback хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO Feedback (user_id, order_id, rating, comment) VALUES (%s, %s, %s, %s)", 
               (1, 1, 5, "Маш сайн үйлчилгээтэй байлаа!"))

# 9. Refund хүснэгтэд өгөгдөл нэмэх
cursor.execute("INSERT INTO Refund (order_id, reason, refund_status) VALUES (%s, %s, %s)", 
               (1, "Буруу бүтээгдэхүүн ирсэн", "батлагдсан"))

# Өгөгдлийг баталгаажуулах (commit хийх)
conn.commit()

print("Өгөгдөл амжилттай нэмэгдлээ!")

# Холболтыг хаах
cursor.close()
conn.close()
