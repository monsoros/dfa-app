import React from 'react';
import DocUnlock from '../../public/doc_img/DocUnlock.gif';
import DocChangePassword from '../../public/doc_img/DocChangePassword.gif';

function Docs() {
    return (
        <div className="docsContainer">
            <div className="mainContainer">
                <div className="gridItem">
                    <p className="headText">TooSafe คืออะไร?</p>
                    <p className="detailText">
                        TooSafe คือ Responsive Website ที่จำลองการทำงานของตู้นิรภัยแบบหมุน 4 ตัวเลข (0,1,2,3) โดยใช้ Deterministic Finite Automata (DFA) มาทำการอธิบายการทำงานของตู้นิรภัย
                    </p>
                </div>

                <div className="gridItem">
                    <p className="headText">ความสามารถของตู้นิรภัย </p>
                    <p className="detailText">
                        ตู้นิรภัยนั้นมีความสามารถดังต่อไปนี้
                    </p>
                    <ol className="c1">
                        <li>สามารถจดจำรหัสผ่านได้ 3 ตัวเลขเพื่อใช้ในการปลดล็อคตู้นิรภัย</li>
                        <li>สามารเปลี่ยนรหัสผ่านที่ใช้การปลดล็อคตู้นิรภัยใหม่ได้</li>
                    </ol>
                </div>

                <div className="gridItem">
                    <p className="headText">ขั้นตอนการปลดล็อคตู้นิรภัย</p>
                    <ol>
                        <li>ป้อนรหัสให้ทั้ง 3 ตัวเลขตามลำดับให้ถูกต้อง โดยรหัสผ่านตั้งต้นคือ 0 1 2 ตามลำดับ หากใส่รหัสผ่านผิด ณ ลำดับใดลำดับหนึ่ง จะต้องเริ่มกรอกรหัสผ่านตั้งแต่ตัวที่ 1 ใหม่</li>
                        <li>ป้อนตัวเลขอะไรก็ได้ที่ไม่ใช่เลข 0 เพื่อทำการปลดล็อคตู้นิรภัย</li>
                    </ol>
                    <img src={DocUnlock} id="DocUnlock" alt="docunlock"></img>
                    <p>
                        <b id="alertText">*ข้อควรระวัง</b>
                     หากใส่รหัสผ่านผิดติดกันเกิน 3 เลขตู้นิรภัยจะไม่สามารถรับตัวเลขใด ๆ ได้อีกต่อไป
                    </p>
                </div>

                <div className="gridItem">
                    <p className="headText">ขั้นตอนเปลี่ยนรหัสผ่านที่ใช้การปลดล็อคตู้นิรภัย</p>
                    <ol>
                        <li>ป้อนรหัสให้ทั้ง 3 ตัวเลขตามลำดับให้ถูกต้อง โดยรหัสผ่านตั้งต้นคือ 0 1 2 ตามลำดับ หากใส่รหัสผ่านผิด ณ ลำดับใดลำดับหนึ่ง จะต้องเริ่มกรอกรหัสผ่านตั้งแต่ตัวที่ 1 ใหม่</li>
                        <li>ป้อนตัวเลข 0 เพื่อเข้าสู่โหมดการบันทึกรหัสผ่านใหม่</li>
                        <li>ป้อนรหัสผ่านใหม่ที่ต้องการจำนวน 3 ตัวเลข</li>
                    </ol>
                    <img src={DocChangePassword} id="DocChangePassword" alt="docchangepassword"></img>

                    <p>
                        <b id="alertText">*ข้อควรระวัง</b>
                     หากใส่รหัสผ่านผิดติดกันเกิน 3 เลขตู้นิรภัยจะไม่สามารถรับตัวเลขใด ๆ ได้อีกต่อไป
                     </p>
                </div>
            </div>
        </div>
    )
}

export default Docs;