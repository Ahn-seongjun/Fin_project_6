#!/usr/bin/env python
# coding: utf-8

# In[7]:


import os
import pandas as pd


# In[5]:


file_list=os.listdir('./')
name = file_list[1:-1]


# In[29]:


df1= pd.read_csv('en_car_black.csv')
df2= pd.read_csv('en_car_blue.csv')
df3= pd.read_csv('en_car_brown.csv')
df4= pd.read_csv('en_car_carrot.csv')
df5= pd.read_csv('en_car_deep_green.csv')
df6= pd.read_csv('en_car_gold.csv')
df7= pd.read_csv('en_car_gray.csv')
df8= pd.read_csv('en_car_green.csv')
df9= pd.read_csv('en_car_light_gold.csv')
df10= pd.read_csv('en_car_light_green.csv')
df11= pd.read_csv('en_car_pearl.csv')
df12= pd.read_csv('en_car_red.csv')
df13= pd.read_csv('en_car_silver.csv')
df14= pd.read_csv('en_car_silver_gray.csv')
df15= pd.read_csv('en_car_sky.csv')
df16= pd.read_csv('en_car_white.csv')


# In[33]:


df1['color']='검정색'
df2['color']='파랑색'
df3['color']='갈색'
df4['color']='주황색'
df5['color']='초록색'
df6['color']='금색'
df7['color']='회색'
df8['color']='초록색'
df9['color']='금색'
df10['color']='초록색'
df11['color']='흰색'
df12['color']='빨간색'
df13['color']='회색'
df14['color']='회색'
df15['color']='파랑색'
df16['color']='흰색'


# In[27]:





# In[34]:


df_all = pd.DataFrame()
df_all=pd.concat([df_all,df1,df2,df3,df4,df5,df6,df7,df8,df9,df10,df11,df12,df13,df14,df15,df16])


# In[35]:


del df_all['Unnamed: 0']


# In[36]:


df_all['mile'] = df_all.mile.astype('int')
df_all['year'] = df_all.year.astype('int')
df_all['price'] = df_all.price.astype('int')


# In[18]:


del df_all['Unnamed: 0']


# In[24]:


df_all['mile'] = df_all.mile.astype('int')
df_all['year'] = df_all.year.astype('int')
df_all['price'] = df_all.price.astype('int')


# In[43]:


df_all['color'] = df_all['color'].replace(['파랑색','갈색','주황색','초록색','금색','빨간색'],'기타')


# In[52]:


df_all.reset_index(drop = True,inplace = True)
df_all


# In[53]:


df_all.to_csv("en_car_all_foreign.csv")

