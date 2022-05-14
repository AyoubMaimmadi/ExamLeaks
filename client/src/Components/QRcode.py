# QR code for some style points, .... why not :D

# Import qrcode library
import qrcode
# create a qrcode image that takes you to the url of our website
img = qrcode.make(
    'https://gpabooster.netlify.app/'   
)
img.save('GPA-Booster.png')
img.show()

# You can run this seperatly to see the image




