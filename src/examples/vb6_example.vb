' Exemplo de código VB6 para cálculo de INSS
' Este é o tipo de código legado que o CodeLift pode traduzir

Option Explicit

' Função para calcular o desconto do INSS
Public Function CalcularINSS(ByVal SalarioBruto As Double) As Double
    Dim INSS As Double
    
    ' Validação de entrada
    If SalarioBruto < 0 Then
        MsgBox "Salário não pode ser negativo!", vbCritical
        CalcularINSS = 0
        Exit Function
    End If
    
    ' Cálculo baseado na tabela de alíquotas (2024)
    If SalarioBruto <= 1320.00 Then
        INSS = SalarioBruto * 0.075
    ElseIf SalarioBruto <= 2571.29 Then
        INSS = SalarioBruto * 0.09
    ElseIf SalarioBruto <= 3856.94 Then
        INSS = SalarioBruto * 0.12
    Else
        INSS = SalarioBruto * 0.14
    End If
    
    CalcularINSS = INSS
End Function

' Função para calcular salário líquido
Public Function CalcularSalarioLiquido(ByVal SalarioBruto As Double, Optional ByVal OutrosDescontos As Double = 0) As Double
    Dim INSS As Double
    Dim SalarioLiquido As Double
    
    ' Calcula o INSS
    INSS = CalcularINSS(SalarioBruto)
    
    ' Calcula o salário líquido
    SalarioLiquido = SalarioBruto - INSS - OutrosDescontos
    
    CalcularSalarioLiquido = SalarioLiquido
End Function

' Função para processar arquivo de funcionários
Public Sub ProcessarArquivoFuncionarios(ByVal CaminhoArquivo As String)
    Dim Arquivo As Integer
    Dim Linha As String
    Dim Nome As String
    Dim Salario As Double
    Dim INSS As Double
    Dim Liquido As Double
    
    ' Abre o arquivo para leitura
    Arquivo = FreeFile
    Open CaminhoArquivo For Input As Arquivo
    
    ' Lê o cabeçalho
    Line Input #Arquivo, Linha
    
    ' Processa cada linha
    Do While Not EOF(Arquivo)
        Line Input #Arquivo, Linha
        
        ' Parse da linha (formato: Nome,Salario)
        Nome = Trim(Split(Linha, ",")(0))
        Salario = CDbl(Split(Linha, ",")(1))
        
        ' Calcula descontos
        INSS = CalcularINSS(Salario)
        Liquido = CalcularSalarioLiquido(Salario)
        
        ' Exibe resultados
        Debug.Print "Funcionário: " & Nome
        Debug.Print "  Salário Bruto: R$ " & Format(Salario, "0.00")
        Debug.Print "  INSS: R$ " & Format(INSS, "0.00")
        Debug.Print "  Salário Líquido: R$ " & Format(Liquido, "0.00")
        Debug.Print "---"
    Loop
    
    ' Fecha o arquivo
    Close Arquivo
End Sub

' Função principal para demonstração
Public Sub Main()
    Dim Salario As Double
    Dim INSS As Double
    Dim Liquido As Double
    
    ' Exemplo de uso
    Salario = 2000.00
    
    INSS = CalcularINSS(Salario)
    Liquido = CalcularSalarioLiquido(Salario)
    
    MsgBox "Salário Bruto: R$ " & Format(Salario, "0.00") & vbCrLf & _
           "INSS: R$ " & Format(INSS, "0.00") & vbCrLf & _
           "Salário Líquido: R$ " & Format(Liquido, "0.00"), vbInformation, "Cálculo de Salário"
End Sub
