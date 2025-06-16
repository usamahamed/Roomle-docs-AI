# Processing Meshes with Blender

1. install Blender
2. install plugin
3. how to use plugin
4. Batch import
    * basic script
    * cookbook


For level 2, 3 and 4 configurators, you have to prepare the meshes using our Blender mesh export plugin. 


















````python
import os
import bpy
from glob import glob

# defile glob pattern of your files
glob_pattern = 'C:/Users/jirip/Downloads/freistil120-20220718T103158Z-001/freistil120/1. Anlieferung/fenix metall table/1600x900/*.obj'

# if you are using windows style backslashes, you need to cancel one with another
obj_list = glob(glob_pattern)

for file in obj_list:
    bpy.ops.import_scene.obj(filepath = file)

for obj in bpy.context.scene.objects:
    if obj.type == 'MESH':
        # Deselect all
        bpy.ops.object.select_all(action='DESELECT')
        # Select specific mesh
        obj.select_set(True)
        
        # adjust scale
        obj.scale *= 0.001
        
        # remove sharp edges
        for edge in obj.data.edges:
            edge.use_edge_sharp = False
            
        # rotate 
        obj.rotation_euler = (radians(angle_deg),0,0)
         
         # recalculate normals
        uvMap = obj.data.uv_layers[0]
        for d in uvMap.data:
            d.uv[0] = uvScale * d.uv[0]
            d.uv[1] = uvScale * d.uv[1]
        
        # rename
        obj.data.name = ob.name.replace("Soulmate_","")
        
        # recalculate normals    
        bm = bmesh.new()
        bm.from_mesh(obj.data)
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
        bm.to_mesh(obj.data)
        bm.free()
        obj.data.update()
        
        # apply change of transform
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
        
        ob.select_set(False)

print('Done')

````
