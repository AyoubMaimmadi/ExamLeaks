# qrcode for some style points, .... why not :D

import qrcode
img = qrcode.make(
    'https://gpabooster.netlify.app/'   
)
img.save('GPA-Booster.png')
img.show()




