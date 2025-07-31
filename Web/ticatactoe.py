import copy
import os
import time

def clear_console():
    os.system('cls' if os.name == 'nt' else 'clear')

rules_board = [[y * 3 + x + 1 for x in range (3)] for y in range(3)]

def create_board() -> list[list[str]]:
    board: list[list[str]] = [[" " for x in range (3)] for y in range(3)]
    return board


def gameover(board: list[list[str]]) -> str:
    # Controlla righe e colonne
    for x in range(len(board)):
        if board[x][0] == board[x][1] == board[x][2] != " ":
            return board[x][0]
        if board[0][x] == board[1][x] == board [2][x] != " ":
            return board[0][x]
    # Controlla diagonali  
    if board[0][0] == board[1][1] == board[2][2] != " ":
        return board[1][1]
    if board[0][2] == board[1][1] == board[2][0] != " ":
        return board[1][1]
    
    return ""

def is_draw(board: list[list[str]]) -> str:
    for x in range(len(board)):
        if " " in board[x]:
            return False
    return True

def print_board(board: list[list[str]]) -> None:
    for x in range(len(board)):
        print("+-----+-----+-----+", end = "      ")
        print("+-----+-----+-----+")

        for y in range(len(board[0])):
            match y: 
                case 0:
                    print(f"|  {board[x][y]}  ", end = "")
                case 1:
                    print(f"|  {board[x][y]}  |", end = "")
                case 2:
                    print(f"  {board[x][y]}  |", end = "      ")
        print(f"|  {rules_board[x][0]}  |  {rules_board[x][1]}  |  {rules_board[x][2]}  |")

    print("+-----+-----+-----+", end = "      ")
    print("+-----+-----+-----+")

    

def move(board: list[list[str]], p: str, pos: int) -> None:
    x, y = (pos - 1) // 3, (pos % 3) - 1
    board[x][y] = p


def is_valid_move(board: list[list[str]], pos: int) -> bool:
    x, y = (pos - 1) // 3, (pos % 3) - 1
    if board[x][y] == " ":
        return True
    return False

def get_move(board: list[list[str]]) -> int:
    while True:
        try:
            i = float(input("E' il tuo turno, scegli una casella:\n>>>"))
            if i.is_integer() and 1 <= i <= 9:
                return int(i)
            else:
                print("Mossa non valida")
        except:
            print("Mossa non valida")

def new_game(board: list[list[str]], p1_turn: bool = True) -> None:
    p1: str = "X"
    p2: str = "O"
    p1_start: bool = p1_turn
    while True:
        clear_console()
        print_board(board)
        if p1_turn:
            i = get_move(board)
            while not is_valid_move(board, i):
                print("La casella scelta è già occupata")
                i = get_move(board)
            move(board, p1 if p1_turn else p2, i)
            p1_turn = not p1_turn
        else:
            ai_turn_message()
            move(board, p2, minimax(board, -2, 2, False)[1])
            p1_turn = not p1_turn
        winner = gameover(board)
        if winner:
            break
        if is_draw(board):
            break
    clear_console()
    print_board(board)
    print(f'Partita terminata\nVince "{winner}"') if winner else print("Partita terminata\nE' un pareggio\n")
    i = input("Vuoi giocare ancora? (y/n)\n>>>")
    if i == "y":
        print(p1_turn)
        new_game(create_board(), not p1_start)

def minimax(board: list[list[str]],alpha: int, beta: int, maximizingPlayer: bool ) -> tuple[int, int]:
    if gameover(board) or is_draw(board):
        return (evaluate(board), 0) # Ritorno 0 perchè se la partita è finita non ha senso ritornare una mossa
    
    if maximizingPlayer:
        maxEval = -2
        maxMove = 0
        for i in range(1,10):
            copy_board = copy.deepcopy(board)
            if is_valid_move(copy_board, i):
                move(copy_board, "X", i)
                eval = minimax(copy_board, alpha, beta, False)[0]
                if eval > maxEval:
                    maxEval = eval
                    maxMove = i
                alpha = max(eval, alpha)
                if alpha >= beta:
                    break
        return (maxEval, maxMove)

    if not maximizingPlayer:
        minEval = 2
        minMove = 0
        for i in range(1,10):
            copy_board = copy.deepcopy(board)
            if is_valid_move(copy_board, i):
                move(copy_board, "O", i)
                eval = minimax(copy_board, alpha, beta, True)[0]
                if eval < minEval:
                    minEval = eval
                    minMove = i
                beta = min(eval, beta)
                if alpha >= beta:
                    break
        return (minEval, minMove)

    
def evaluate(board: list[list[str]]) -> int:
    winner = gameover(board)
    if winner == "X": return 1
    elif winner == "O": return -1
    else: return 0


def ai_turn_message(duration=3): # CHAT GPT 🙏🙏🙏
    print("È il turno dell'IA", end='', flush=True)
    steps = int(duration / 1)  # ogni 0.5 secondi
    for _ in range(steps):
        print('.', end='', flush=True)
        time.sleep(0.5)
    print()  # Vai a capo alla fine

new_game(create_board())