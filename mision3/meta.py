import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import LabelEncoder
from sklearn.decomposition import PCA
from sklearn.cross_decomposition import PLSRegression
from scipy.stats import ttest_ind 
import matplotlib.pyplot as plt
import seaborn as sns

df_raw = pd.read_csv("Sa_29213.csv", index_col=0)
df = df_raw[1:]  # quitar la fila de nombres duplicada
df = df.apply(pd.to_numeric, errors="coerce")  # convertir a numérico

# Crear etiquetas de grupo
group_labels = ['CTR'] * 9 + ['TTO'] * 9

# Normalización por suma total (Total Sum Normalization)
df_norm = df.div(df.sum(axis=0), axis=1)

# Transformación logarítmica (log1p evita log(0))
df_log = np.log1p(df_norm)

# Eliminamos NaNs antes de escalar
df_log_clean = df_log.dropna(axis=0)

# Escalado (autoscaling: media 0, varianza 1)
scaler = StandardScaler()
scaled = scaler.fit_transform(df_log_clean.T)
df_scaled = pd.DataFrame(scaled, index=df_log_clean.columns, columns=df_log_clean.index)


raw_values = df.values.flatten()         # intensidades originales
scaled_values = df_scaled.values.flatten()  # intensidades normalizadas+escaladas

# Densidad antes de normalización
plt.figure()
plt.hist(raw_values, bins=100, density=True)
plt.title("Datos antes de la Normalizacion")
plt.xlabel("Intensidad")
plt.ylabel("Densidad")
plt.tight_layout()
plt.show()

# Densidad después de normalización + escalado
plt.figure()
plt.hist(scaled_values, bins=100, density=np.true_divide)
plt.title("Datos despues de la Normalización")
plt.xlabel("Intensidad Normalizada")
plt.ylabel("Demsidad")
plt.tight_layout()
plt.show()