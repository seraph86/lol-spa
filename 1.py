from PIL import Image
import PIL
import os

path = 'public/img/champion/'
export_path = 'public/img/champ/'

images = os.listdir(path)


def resize():
    for image in images:
        image_name = image.split('.', 1)[0]
        # fixed_height = 250
        image = Image.open(path+image)
        # height_percent = (fixed_height / float(image.size[1]))
        # width_size = int( float(image.size[0]) * float(height_percent) )
        image = image.resize((64, 64), PIL.Image.NEAREST)
        image.save(export_path+image_name + '.webp',
                   'webp', optimize=True, quality=75.6)


resize()
