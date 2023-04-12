import csv
import random 
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def dataset():
    with open('snippets.csv', 'r') as file:
        reader = csv.reader(file)
        snippets = list(reader)
        snippet = random.choice(snippets)[0]
    return render_template('dataset.html', snippet=snippet)

@app.route('/update_csv', methods=['POST'])
def update_csv():
    data = request.get_json()
    action = data['action']
    code = data['code']
    
    if action == 'yes':
        # Update selected.csv and remove code from snippets.csv
        with open('selected.csv', 'a') as file:
            writer = csv.writer(file)
            writer.writerow([code])
        with open('snippets.csv', 'r') as file:
            reader = csv.reader(file)
            snippets = list(reader)
        snippets.remove([code])
        with open('snippets.csv', 'w') as file:
            writer = csv.writer(file)
            writer.writerows(snippets)
    
    elif action == 'no':
        # Update unselected.csv
        with open('unselected.csv', 'a') as file:
            writer = csv.writer(file)
            writer.writerow([code])
    
    elif action == 'send':
        # Update arun.csv
        feedback = data['feedback']
        with open('arun.csv', 'a') as file:
            writer = csv.writer(file)
            writer.writerow([code, feedback])
    
    return ''

if __name__ == '__main__':
    app.run()