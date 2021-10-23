# The ทอยลูกเต๋า

API ทอยลูกเต๋าด้วยหน้าที่มีจริงๆ แบบ Psudorandom

## วิธีใช้งาน

เพียงพิมพ์คีย์เวิร์ดเหล่านี้ด้านหลัง url เท่านั้น!

```/roll``` -> ทอยลูกเต๋า

ตัวอย่าง JSON

```json
request -> /roll

[{"result":4}]
```

```/roll/{times}``` -> ทอยลูกเต๋า ```times``` ครั้ง

ตัวอย่าง JSON

```json
request -> /roll/4

[{"result":2},{"result":5},{"result":3},{"result":4}]
```

```/xroll/{faces}``` -> ทอยลูกเต๋า ```faces``` หน้า

สามารถดูหน้าที่สามารถทอยได้ [ที่นี่](https://en.wikipedia.org/wiki/Dice#Rarer_variations)

ตัวอย่าง JSON

```json
request -> /xroll/50

[{"result":26}]
```

```/xroll/{faces}/{times}``` -> ทอยลูกเต๋า ```faces``` หน้า ```times``` ครั้ง

สามารถดูหน้าที่สามารถทอยได้ [ที่นี่](https://en.wikipedia.org/wiki/Dice#Rarer_variations)

ตัวอย่าง JSON

```json
request -> /xroll/50/10

[{"result":28},{"result":12},{"result":28},{"result":26},{"result":3},{"result":20},{"result":8},{"result":30},{"result":20},{"result":47}]
```
