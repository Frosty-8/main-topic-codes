import * as React from 'react';
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Snackbar } from "@mui/material";
import '../styles/main.css';

export function Python() {
  const pCode1 = `
import tensorflow 
from tensorflow.keras.models import Sequential #type:ignore
from tensorflow.keras.layers import Dense #type:ignore
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

X, y = make_classification(
    n_samples=1000, 
    n_features=20, 
    n_informative=15, 
    n_redundant=5, 
    random_state=42
)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Build the feedforward neural network model
model = Sequential([
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
      # Input layer
    Dense(32, activation='relu'),
      # Hidden layer
    Dense(1, activation='sigmoid'),
      # Output layer for binary classification
])

# Compile the model
model.compile(optimizer='adam', 
              loss='binary_crossentropy', 
              metrics=['accuracy'])

# Train the model
history = model.fit(X_train, y_train, 
                    epochs=20, 
                    batch_size=32, 
                    validation_split=0.2, 
                    verbose=1)

# Evaluate the model on test data
test_loss, test_accuracy = model.evaluate(X_test, y_test, verbose=0)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%") 

predictions = (model.predict(X_test) > 0.5).astype("int32")
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy Score: {accuracy * 100:.2f}%")
    `;

  const pCode2 = `
import tensorflow as tf
from tensorflow.keras.models import Sequential# type: ignore 
from tensorflow.keras.layers import Dense, Dropout#type:ignore
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris
from sklearn.metrics import classification_report
from tensorflow.keras.utils import to_categorical#type:ignore

# Load the Iris dataset
data = load_iris()
X, y = data.data, data.target

# One-hot encode the labels
y = to_categorical(y, num_classes=3)

# Split into training and testing datasets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Normalize the features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Build the neural network model
model = Sequential([
    Dense(128, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.3),
    Dense(64, activation='relu'),
    Dropout(0.3),
    Dense(3, activation='softmax')  # Output layer with 3 classes
])

# Compile the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(X_train, y_train,
                    epochs=30,
                    batch_size=8,
                    validation_split=0.2,
                    verbose=1)

# Evaluate the model on the test data
test_loss, test_accuracy = model.evaluate(X_test, y_test, verbose=0)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")

# Generate predictions
predictions = model.predict(X_test)
y_pred = predictions.argmax(axis=1)
y_true = y_test.argmax(axis=1)

# Classification report
print("Classification Report:\n")
print(classification_report(y_true, y_pred, target_names=data.target_names))
    `;

  const pCode3 = `
  
import tensorflow as tf
from tensorflow.keras.models import Sequential #type:ignore
from tensorflow.keras.layers import Dense, Embedding, LSTM, Bidirectional, Dropout #type:ignore
from tensorflow.keras.preprocessing.sequence import pad_sequences #type:ignore
from tensorflow.keras.datasets import imdb #type:ignore

# Load the IMDB dataset
vocab_size = 100  # Use the top 10,000 words in the dataset
max_length = 20  # Max length of each review
(x_train, y_train), (x_test, y_test) = imdb.load_data(num_words=vocab_size)

# Pad sequences to ensure uniform input shape
x_train = pad_sequences(x_train, maxlen=max_length, padding='post', truncating='post')
x_test = pad_sequences(x_test, maxlen=max_length, padding='post', truncating='post')

# Build the deep neural network model
model = Sequential([
    Embedding(vocab_size, 128, input_length=max_length),  # Embedding layer
    Bidirectional(LSTM(64, return_sequences=False)),  # Bidirectional LSTM for sequential data
    Dropout(0.3),  # Dropout for regularization
    Dense(64, activation='relu'),  # Dense layer
    Dropout(0.3),
    Dense(1, activation='sigmoid')  # Output layer for binary classification
])

# Compile the model
model.compile(optimizer='adam', 
              loss='binary_crossentropy', 
              metrics=['accuracy'])

# Train the model
history = model.fit(
    x_train, y_train, 
    epochs=1, 
    batch_size=32, 
    validation_split=0.2, 
    verbose=1
)

# Evaluate the model on test data
test_loss, test_accuracy = model.evaluate(x_test, y_test, verbose=0)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")
`;

  const pCode4 = `
  
import tensorflow as tf
from tensorflow.keras.models import Sequential #type:ignore
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout #type:ignore
from tensorflow.keras.datasets import mnist #type:ignore
from tensorflow.keras.utils import to_categorical #type:ignore
import matplotlib.pyplot as plt

# Load the MNIST dataset
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Preprocess the data
x_train = x_train.reshape(-1, 28, 28, 1).astype('float32') / 255.0
x_test = x_test.reshape(-1, 28, 28, 1).astype('float32') / 255.0

y_train = to_categorical(y_train, num_classes=10)
y_test = to_categorical(y_test, num_classes=10)

# Build the CNN model
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(10, activation='softmax')  # Output layer for 10 classes (digits 0-9)
])

# Compile the model
model.compile(optimizer='adam', 
              loss='categorical_crossentropy', 
              metrics=['accuracy'])

# Train the model
history = model.fit(x_train, y_train, 
                    epochs=10, 
                    batch_size=64, 
                    validation_split=0.2, 
                    verbose=1)

# Evaluate the model on test data
test_loss, test_accuracy = model.evaluate(x_test, y_test, verbose=0)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")
`;

  const pCode5 = `
  
import tensorflow as tf #type:ignore
from tensorflow.keras.models import Sequential #type:ignore
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout #type:ignore
from tensorflow.keras.datasets import cifar10 #type:ignore
from tensorflow.keras.utils import to_categorical #type:ignore

# Load and preprocess the CIFAR-10 dataset
(x_train, y_train), (x_test, y_test) = cifar10.load_data()

# Normalize pixel values to the range [0, 1]
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# One-hot encode the labels
y_train = to_categorical(y_train, 10)
y_test = to_categorical(y_test, 10)

# Build the CNN model
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),  # Convolutional layer
    MaxPooling2D((2, 2)),  # Max pooling layer
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Conv2D(128, (3, 3), activation='relu'),
    Flatten(),  # Flatten feature maps to a vector
    Dense(256, activation='relu'),  # Fully connected layer
    Dropout(0.5),  # Dropout for regularization
    Dense(10, activation='softmax')  # Output layer for 10 classes (CIFAR-10 categories)
])

# Compile the model
model.compile(optimizer='adam', 
              loss='categorical_crossentropy', 
              metrics=['accuracy'])

# Train the model
history = model.fit(
    x_train, y_train, 
    epochs=5, 
    batch_size=64, 
    validation_split=0.2, 
    verbose=1
)

# Evaluate the model on the test data
test_loss, test_accuracy = model.evaluate(x_test, y_test, verbose=0)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")
`;

  const [open,setOpen] = React.useState(false);
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setOpen(true);
  };

  return (
    <div>
      
      <details>
        <summary>Python Deep Learning Codes </summary>
        <details>
          <summary>Feedforward Neural Network using tensorflow and keras</summary>
          <pre>
            <code>{pCode1}</code>
          </pre>
          <button onClick={() => handleCopy(pCode1)}>Copy Code</button>
        </details>

        <details>
          <summary>Deep Neural Networks (OCR Letter Recognition Dataset)</summary>
          <pre>
            <code>{pCode2}</code>
          </pre>
          <button onClick={() => handleCopy(pCode2)}>Copy Code</button>
        </details>

        <details>
          <summary>Deep Neural Networks on Text Data (IMDB Dataset)</summary>
          <pre>
            <code>{pCode3}</code>
          </pre>
          <button onClick={() => handleCopy(pCode3)}>Copy Code</button>
        </details>

        <details>
          <summary>Digit Recognition Using Convolutional Neural Networks (CNNs)</summary>
          <pre>
            <code>{pCode4}</code>
          </pre>
          <button onClick={() => handleCopy(pCode4)}>Copy Code</button>
        </details>

        <details>
          <summary>Building a CNN Model to Classify Images from Popular Datasets (MNIST, CIFAR-10, ImageNet)</summary>
          <pre>
            <code>{pCode5}</code>
          </pre>
          <button onClick={() => handleCopy(pCode5)}>Copy Code</button>
        </details>
      </details>

      <details>
        <summary>Python Machine Learning Codes </summary>
      </details>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          onClose={() => setOpen(false)}
        >
          Code copied to clipboard!
        </Alert>
      </Snackbar>

    </div>
  );
}
