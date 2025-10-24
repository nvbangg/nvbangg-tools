; Color Picker
; Nhấn Capslock P để lấy mã màu tại vị trí con trỏ chuột

#Requires AutoHotkey v2.0

*CapsLock::
{
    KeyWait "CapsLock"
    if (A_PriorKey = "CapsLock" && A_ThisHotkey = "*CapsLock") {
        Sleep(20)
        if GetKeyState("CapsLock", "T")
            SetCapsLockState "AlwaysOff"
        else
            SetCapsLockState "AlwaysOn"
    }
}

#HotIf GetKeyState("CapsLock", "P")
p::GetColorAtCursor()
#HotIf

GetColorAtCursor() {
    ; Lấy vị trí và màu
    MouseGetPos(&x, &y)
    color := PixelGetColor(x, y)
    hexColor := Format("{:06X}", color)
    
    ; Chuyển đổi RGB
    r := Integer("0x" . SubStr(hexColor, 1, 2))
    g := Integer("0x" . SubStr(hexColor, 3, 2))
    b := Integer("0x" . SubStr(hexColor, 5, 2))
    
    colorGui := Gui("+AlwaysOnTop -MinimizeBox", "Color Picker")
    colorGui.BackColor := "White"
    
    ; Hiển thị thông tin
    colorGui.Add("Text", "x10 y10 w250", "Vị trí: (" . x . ", " . y . ")")
    colorGui.Add("Text", "x10 y30 w250", "HEX: #" . hexColor)
    colorGui.Add("Text", "x10 y50 w250", "RGB: rgb(" . r . ", " . g . ", " . b . ")")
    colorBox := colorGui.Add("Text", "x270 y10 w60 h60 Border Center")
    
    ; Chuyển đổi RGB sang BGR cho Windows API
    bgrColor := (b << 16) | (g << 8) | r
    
    SetTimer(PaintColor, -50)
    
    PaintColor() {
        hdc := DllCall("GetDC", "Ptr", colorBox.Hwnd, "Ptr")
        brush := DllCall("CreateSolidBrush", "UInt", bgrColor, "Ptr")
        rect := Buffer(16, 0)
        DllCall("GetClientRect", "Ptr", colorBox.Hwnd, "Ptr", rect)
        DllCall("FillRect", "Ptr", hdc, "Ptr", rect, "Ptr", brush)
        DllCall("DeleteObject", "Ptr", brush)
        DllCall("ReleaseDC", "Ptr", colorBox.Hwnd, "Ptr", hdc)
    }
    
    colorGui.Add("Button", "x10 y80 w80 h25", "Copy HEX").OnEvent("Click", (*) => (A_Clipboard := "#" . hexColor, colorGui.Destroy()))
    colorGui.Add("Button", "x100 y80 w80 h25", "Copy RGB").OnEvent("Click", (*) => (A_Clipboard := "rgb(" . r . ", " . g . ", " . b . ")", colorGui.Destroy()))
    
    colorGui.Show("w350 h120")
}
